// 1. CHARGEMENT DES VARIABLES D'ENVIRONNEMENT
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

const envFileName = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, '..', 'env', envFileName) });
dotenv.config({ path: path.join(__dirname, '..', 'env', '.env') });

console.log("✅ Système : Fichiers .env chargés");

// 2. IMPORT DES DEPENDANCES
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// On vérifie que la connexion DB se fait bien au démarrage
const db = require('./models/index'); 

// 3. INITIALISATION DE L'APP
var app = express();

// 4. CONFIGURATION DES MIDDLEWARES (AVANT LES ROUTES)
app.use(cors()); // Très important de le mettre en premier
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Dossier public
app.use(express.static(path.join(__dirname, '..', 'public')));

// 5. IMPORT ET UTILISATION DES ROUTES
// On les importe ICI pour être sûr que les variables d'env sont prêtes
var indexRouter = require('./routes/index');


app.use('/', indexRouter);


// 6. GESTION DES ERREURS (Point 404 du PDF côté API)
app.use(function(req, res, next) {
  res.status(404).json({ message: "Route API non trouvée" });
});

module.exports = app;