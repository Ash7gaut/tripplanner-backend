/*
  Warnings:

  - Made the column `CreatedAt` on table `Itinerary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `UpdatedAt` on table `Itinerary` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Itinerary` MODIFY `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `UpdatedAt` DATETIME(3) NOT NULL;
