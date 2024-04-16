/*
  Warnings:

  - You are about to alter the column `answer` on the `Itinerary` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Json`.

*/
-- AlterTable
ALTER TABLE `Itinerary` MODIFY `answer` JSON NULL;
