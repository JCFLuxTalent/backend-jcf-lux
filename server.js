
const express = require('express');
const cors = require('cors');
const db = require('./db');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

app.get('/api/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erreur SELECT remplacants :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/api/disponibilites', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM disponibilites');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erreur SELECT disponibilites :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/api/disponibilites', async (req, res) => {
  const { idremplacant, date } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO disponibilites (idremplacant, date) VALUES ($1, $2) RETURNING *',
      [idremplacant, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('❌ Erreur INSERT disponibilite :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
