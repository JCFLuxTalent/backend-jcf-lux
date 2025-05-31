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

// Route API dynamique
app.get('/api/remplacants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM remplacants');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erreur SELECT remplacants :', err); // AJOUTE CETTE LIGNE POUR DEBUG
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Lancement du serveur après suppression éventuelle
(async () => {
  try {
    const initSql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
    await db.query(initSql);
    console.log('✅ Table Remplaçants supprimée (si existait)');
  } catch (err) {
    console.error('❌ Erreur suppression Remplaçants :', err);
  }

  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
})();
