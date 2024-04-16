/*
  Warnings:

  - You are about to drop the column `Answer` on the `Itinerary` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Itinerary` table. All the data in the column will be lost.
  - You are about to drop the column `Prompt` on the `Itinerary` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Itinerary` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Itinerary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prompt` to the `Itinerary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Itinerary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Itinerary` DROP COLUMN `Answer`,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `Prompt`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `answer` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `prompt` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
