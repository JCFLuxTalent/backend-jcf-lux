
const express = require('express');
const router = express.Router();
const db = require('./db');

// GET: Liste des disponibilités
router.get('/api/disponibilites', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM disponibilites');
    res.json(result.rows);
  } catch (err) {
    console.error('Erreur SELECT disponibilites :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST: Enregistrer une réservation
router.post('/api/reservations', async (req, res) => {
  const {
    nom_client,
    prenom_client,
    telephone_client,
    enseigne,
    adresse_remplacement,
    societe_a_facturer,
    adresse_facturation,
    numero_tva,
    siret,
    idremplacant,
    date_debut,
    date_fin
  } = req.body;

  try {
    await db.query(
      `INSERT INTO reservations (
        nom_client, prenom_client, telephone_client, enseigne,
        adresse_remplacement, societe_a_facturer, adresse_facturation,
        numero_tva, siret, idremplacant, date_debut, date_fin
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        nom_client, prenom_client, telephone_client, enseigne,
        adresse_remplacement, societe_a_facturer, adresse_facturation,
        numero_tva, siret, idremplacant, date_debut, date_fin
      ]
    );
    res.status(201).json({ message: 'Réservation enregistrée' });
  } catch (err) {
    console.error('Erreur INSERT réservation :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
