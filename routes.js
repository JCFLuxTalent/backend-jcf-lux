const express = require('express');
const router = express.Router();
const pool = require('./db');

// Remplacants
router.get('/remplacants', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Disponibilités
router.get('/disponibilites', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM disponibilites');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
