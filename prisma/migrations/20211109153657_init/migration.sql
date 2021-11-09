-- CreateEnum
CREATE TYPE "ParticipantStatus" AS ENUM ('ACTIVE', 'REST', 'WITHDRAW');

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "status" "ParticipantStatus" NOT NULL DEFAULT E'ACTIVE',

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_email_key" ON "Participant"("email");
