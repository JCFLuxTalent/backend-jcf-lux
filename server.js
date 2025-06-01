const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sert tous les fichiers du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route racine
app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

// (optionnel, pour être sûr) Route explicite pour le formulaire
app.get('/formulaire', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'formulaire.html'));
});

// Exemple : autres endpoints API
app.get('/api/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
