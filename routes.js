const express = require('express');
const router = express.Router();
const db = require('./db');

// Liste des remplaçants (pour le formulaire)
router.get('/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT id, prenom, nom, qualification FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    console.error('Erreur SELECT remplaçants :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// D'autres endpoints peuvent être ajoutés ici plus tard

module.exports = router;