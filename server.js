const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const db = require('./db');

dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

app.get('/api/remplacants', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM remplacants');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

app.get('/api/disponibilites', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM disponibilites');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});