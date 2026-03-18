# 👨‍🎨 Trouve Ton Artisan - Application Fullstack

Ce projet est une application web complète permettant de consulter un annuaire d'artisans. L'architecture est découpée en deux parties distinctes : un **Backend (API)** pour la gestion des données et un **Frontend (React)** pour l'interface utilisateur dynamique.

---

## 📁 Structure du Projet

- **/Api** : Serveur Node.js avec Express et Sequelize (ORM).
- **/Frontend** : Interface utilisateur moderne développée avec React (Vite).

---

## 🛠️ Stack Technique Déployée

### 💻 Frontend (Interface Utilisateur)
* **React JS** : Framework pour créer une interface dynamique et découpée en composants réutilisables.
* **Sass** : Préprocesseur CSS pour structurer le style avec des variables et des fonctions.
* **Bootstrap** : Bibliothèque UI pour un design "responsive" (grilles, boutons, cartes).
* **Axios** : Client HTTP pour communiquer avec l'API Node.js et récupérer les données.
* **React-Router-Dom** : Gestionnaire de navigation pour passer d'une page à l'autre sans rechargement.

### ⚙️ Backend (API & Données)
* **Express** : Framework web robuste pour Node.js.
* **Sequelize & MySQL2** : Gestion de la base de données relationnelle via un ORM.
* **Dotenv** : Sécurisation des variables d'environnement (accès DB).
* **CORS** : Autorisation des requêtes sécurisées entre le Frontend et l'API.
* **EJS** : Moteur de template pour le rendu de vues côté serveur.
* **Nodemon** (Dev) : Redémarrage automatique du serveur pendant le développement.

---

## 🚀 Installation et Lancement

### 1. Configuration du Backend (API)
Allez dans le dossier `Api` :
```bash
cd Api
npm install
npm run dev
