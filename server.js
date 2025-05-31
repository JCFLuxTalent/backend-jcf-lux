const express = require('express');
const cors = require('cors');
const db = require('./db');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint de test
app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

// Endpoint Remplacants
app.get('/api/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erreur SELECT remplacants :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Endpoint Disponibilités
app.get('/api/disponibilites', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT id_remplacant, ARRAY_AGG(date_disponibilite) AS dispo
      FROM disponibilites
      GROUP BY id_remplacant
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erreur SELECT disponibilites :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
