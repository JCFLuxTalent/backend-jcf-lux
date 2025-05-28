const express = require('express');
const router = express.Router();

// Liste des remplaçants
router.get('/remplacants', (req, res) => {
  res.json([
    { id: 1, prenom: 'Léa', nom: 'Dupont' },
    { id: 2, prenom: 'Hugo', nom: 'Martin' },
  ]);
});

// Disponibilités
router.get('/disponibilites', (req, res) => {
  res.json([
    { idRemplacant: 1, dispo: ['2025-06-01', '2025-06-07'] },
    { idRemplacant: 2, dispo: ['2025-06-10', '2025-06-17'] },
  ]);
});

module.exports = router;
