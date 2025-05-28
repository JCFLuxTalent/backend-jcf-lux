const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/remplacants', (req, res) => {
  res.json([
    { id: 1, prenom: 'Léa', nom: 'Dupont' },
    { id: 2, prenom: 'Hugo', nom: 'Martin' },
  ]);
});

app.get('/api/disponibilites', (req, res) => {
  res.json([
    { idRemplacant: 1, dispo: ['2025-06-01', '2025-06-07'] },
    { idRemplacant: 2, dispo: ['2025-06-10', '2025-06-17'] },
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});