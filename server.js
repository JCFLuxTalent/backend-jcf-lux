const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // ← ICI

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Utilise routes.js pour toutes les routes API
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});