-- CreateTable
CREATE TABLE `tours` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `maxGroupSize` INTEGER NOT NULL,
    `difficulty` ENUM('EASY', 'MEDIUM', 'DIFFICULT') NOT NULL,
    `price` INTEGER NOT NULL,
    `image_cover` VARCHAR(191) NULL,
    `start_date` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tours_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locations` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `address` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,

    UNIQUE INDEX `locations_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tour_locations` (
    `tour_id` VARCHAR(191) NOT NULL,
    `location_id` VARCHAR(191) NOT NULL,

    INDEX `tour_locations_tour_id_location_id_idx`(`tour_id`, `location_id`),
    INDEX `tour_locations_location_id_fkey`(`location_id`),
    PRIMARY KEY (`tour_id`, `location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tour_locations` ADD CONSTRAINT `tour_locations_tour_id_fkey` FOREIGN KEY (`tour_id`) REFERENCES `tours`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tour_locations` ADD CONSTRAINT `tour_locations_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
