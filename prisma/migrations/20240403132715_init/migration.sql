-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL DEFAULT 'default.png',
    `verified` BOOLEAN NULL DEFAULT false,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('user', 'admin') NULL DEFAULT 'user',
    `verificationCode` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_verificationCode_key`(`verificationCode`),
    INDEX `users_email_verificationCode_idx`(`email`, `verificationCode`),
    UNIQUE INDEX `users_email_verificationCode_key`(`email`, `verificationCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
