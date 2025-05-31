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
    const result = await db.query(`
      SELECT id_remplacant, array_agg(date ORDER BY date) as dispo
      FROM disponibilites
      GROUP BY id_remplacant
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erreur SELECT disponibilites :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Créer les tables au démarrage
(async () => {
  try {
    const initSql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
    await db.query(initSql);
    console.log('✅ Tables créées avec succès (init.sql)');
  } catch (err) {
    console.error('❌ Erreur initialisation base :', err);
  }

  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
})();
