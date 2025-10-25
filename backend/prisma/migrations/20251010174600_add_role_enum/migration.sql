/*
  Warnings:

  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('STUDENT', 'ADMIN', 'SUPER_ADMIN', 'DEPARTMENT', 'CLEARANCE_OFFICER', 'POLICE_OFFICER', 'LIBRARY_OFFICER') NOT NULL;
