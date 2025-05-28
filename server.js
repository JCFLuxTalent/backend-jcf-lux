const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route racine pour test de disponibilité
app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

// Import des routes API depuis routes.js
const routes = require('./routes');
app.use('/api', routes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
