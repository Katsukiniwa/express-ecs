/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `authors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `user_accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `authors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `authors` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user_accounts` ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `authors_user_id_unique` ON `authors`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_accounts_user_id_unique` ON `user_accounts`(`user_id`);

-- AddForeignKey
ALTER TABLE `user_accounts` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `authors` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
