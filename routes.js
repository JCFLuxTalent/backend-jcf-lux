const express = require('express');
const router = express.Router();
const pool = require('./db');

// Endpoint dynamique : liste des remplaçants
router.get('/remplacants', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, prenom, nom FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    console.error('Erreur lors de la récupération des remplaçants', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Endpoint temporaire (statique) pour les disponibilités (à rendre dynamique plus tard)
router.get('/disponibilites', (req, res) => {
  res.json([
    { idRemplacant: 1, dispo: ['2025-06-01', '2025-06-07'] },
    { idRemplacant: 2, dispo: ['2025-06-10', '2025-06-17'] },
  ]);
});

module.exports = router;
