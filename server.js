const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Remplaçants dynamiques
app.get('/api/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des remplaçants', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Disponibilités dynamiques
app.get('/api/disponibilites', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM disponibilites');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des disponibilités', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
