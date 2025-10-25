-- DropForeignKey
ALTER TABLE `ClearanceRequest` DROP FOREIGN KEY `ClearanceRequest_department_id_fkey`;

-- DropIndex
DROP INDEX `ClearanceRequest_department_id_fkey` ON `ClearanceRequest`;

-- AlterTable
ALTER TABLE `ClearanceRequest` MODIFY `department_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ClearanceRequest` ADD CONSTRAINT `ClearanceRequest_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
