CREATE DATABASE `trouve_ton_artisan` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */; c'est dans structure sql que je le mets

-- 1. Création de la base de données
CREATE DATABASE IF NOT EXISTS `trouve_ton_artisan` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ 
/*!80016 DEFAULT ENCRYPTION='N' */;

USE `trouve_ton_artisan`;

-- 2. Création de la table des catégories
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 3. Création de la table des artisans
CREATE TABLE `artisans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `specialite` varchar(100) DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `note` decimal(2,1) DEFAULT '0.0',
  `id_categorie` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_artisan_categorie` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;