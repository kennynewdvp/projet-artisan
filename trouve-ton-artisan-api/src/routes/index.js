var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth'); 
const categoryCtrl = require('../controllers/categoryController');
const artisanCtrl = require('../controllers/artisanController');

/* --- ROUTES PUBLIQUES (Accessibles sans Token pour l'affichage du site) --- */

// Récupérer toutes les catégories pour le menu
router.get('/api/categories', categoryCtrl.findAll);

// Récupérer tous les artisans pour la liste
router.get('/api/artisans', artisanCtrl.findAll);

// NOUVEAU : Récupérer UN SEUL artisan pour la page détails
// Le ":id" permet de passer n'importe quel numéro d'artisan dans l'URL
router.get('/api/artisans/:id', artisanCtrl.findOne);


/* --- ROUTES PRIVÉES --- */
// router.post('/api/artisans', auth, artisanCtrl.create);


/* --- PAGE D'ACCUEIL DE L'API --- */
router.get('/', function(req, res, next) {
  res.send('L\'API Trouve ton artisan est opérationnelle !');
});

module.exports = router;