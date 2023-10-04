-- CreateTable
CREATE TABLE `tracking` (
    `id_receipt` VARCHAR(191) NOT NULL,
    `sender_name` VARCHAR(191) NOT NULL,
    `sender_address` VARCHAR(191) NOT NULL,
    `recipient_name` VARCHAR(191) NOT NULL,
    `recipient_address` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_receipt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pricing` (
    `id_pricing` INTEGER NOT NULL AUTO_INCREMENT,
    `origin` VARCHAR(191) NOT NULL,
    `destination` VARCHAR(191) NOT NULL,
    `weight` INTEGER NOT NULL,

    PRIMARY KEY (`id_pricing`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
