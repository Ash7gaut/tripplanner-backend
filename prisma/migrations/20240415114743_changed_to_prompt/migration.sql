/*
  Warnings:

  - You are about to drop the column `IAResponse` on the `Itinerary` table. All the data in the column will be lost.
  - You are about to drop the column `RequestText` on the `Itinerary` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Itinerary` table. All the data in the column will be lost.
  - Added the required column `Answer` to the `Itinerary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CreatedAt` to the `Itinerary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Prompt` to the `Itinerary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Itinerary` DROP COLUMN `IAResponse`,
    DROP COLUMN `RequestText`,
    DROP COLUMN `createdAt`,
    ADD COLUMN `Answer` VARCHAR(191) NOT NULL,
    ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `Prompt` VARCHAR(191) NOT NULL;
