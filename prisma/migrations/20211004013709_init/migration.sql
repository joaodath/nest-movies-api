/*
  Warnings:

  - You are about to drop the column `nome` on the `Genre` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Genre_nome_key` ON `Genre`;

-- AlterTable
ALTER TABLE `Genre` DROP COLUMN `nome`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);
