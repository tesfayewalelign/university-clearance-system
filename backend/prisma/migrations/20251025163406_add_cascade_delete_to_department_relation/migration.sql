-- DropForeignKey
ALTER TABLE `DepartmentClearanceStatus` DROP FOREIGN KEY `DepartmentClearanceStatus_department_id_fkey`;

-- AddForeignKey
ALTER TABLE `DepartmentClearanceStatus` ADD CONSTRAINT `DepartmentClearanceStatus_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
