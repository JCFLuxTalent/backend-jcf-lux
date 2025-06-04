const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Page formulaire
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'formulaire.html'));
});

// API Remplaçants
app.get('/api/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// API Disponibilités
app.get('/api/disponibilites', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM disponibilites');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// (à compléter : POST pour réservations)

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
