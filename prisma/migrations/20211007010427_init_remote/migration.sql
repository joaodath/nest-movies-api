/*
  Warnings:

  - You are about to drop the column `movieId` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `movieId` on the `Staff` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Genre` DROP FOREIGN KEY `Genre_movieId_fkey`;

-- DropForeignKey
ALTER TABLE `Staff` DROP FOREIGN KEY `Staff_movieId_fkey`;

-- AlterTable
ALTER TABLE `Genre` DROP COLUMN `movieId`;

-- AlterTable
ALTER TABLE `Staff` DROP COLUMN `movieId`;

-- CreateTable
CREATE TABLE `_GenreToMovie` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GenreToMovie_AB_unique`(`A`, `B`),
    INDEX `_GenreToMovie_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MovieToStaff` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MovieToStaff_AB_unique`(`A`, `B`),
    INDEX `_MovieToStaff_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GenreToMovie` ADD FOREIGN KEY (`A`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GenreToMovie` ADD FOREIGN KEY (`B`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MovieToStaff` ADD FOREIGN KEY (`A`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MovieToStaff` ADD FOREIGN KEY (`B`) REFERENCES `Staff`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
