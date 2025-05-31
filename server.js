const express = require('express');
const cors = require('cors');
const db = require('./db');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Chargement et exécution du script SQL à chaque démarrage
const initSql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
db.query(initSql)
  .then(() => console.log('✅ Tables créées ou déjà existantes.'))
  .catch((err) => console.error('❌ Erreur création des tables :', err));

// Route de test
app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});