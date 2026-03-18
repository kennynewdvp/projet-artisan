USE `trouve_ton_artisan`;

-- Insertion des catégories
INSERT INTO `categories` (`nom`) VALUES ('Bâtiment'), ('Services'), ('Fabrication'), ('Alimentation');

-- Insertion de quelques artisans de test
INSERT INTO `artisans` (`nom`, `specialite`, `ville`, `note`, `id_categorie`) 
VALUES 
('Jean Plomberie', 'Plombier', 'Lyon', 4.5, 1),
('Boulangerie du Coin', 'Boulanger', 'Paris', 4.8, 4),
('Electricité Pro', 'Électricien', 'Marseille', 4.2, 1);