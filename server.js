const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes'); // ← routes.js doit exister

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sert les fichiers statiques du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Utilise routes.js pour toutes les routes API
app.use('/api', routes);

// Page d’accueil simple
app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});