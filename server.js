
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const db = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

// Lancer init.sql automatiquement
(async () => {
  try {
    const initSql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
    await db.query(initSql);
    console.log('✅ Tables créées ou vérifiées.');
  } catch (err) {
    console.error('❌ Erreur création tables :', err);
  }

  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
})();
