const express = require('express');
const router = express.Router();
const db = require('./db');

// Endpoint POST pour enregistrer une réservation
router.post('/api/reservations', async (req, res) => {
  try {
    const {
      nom_client,
      prenom_client,
      telephone_client,
      enseigne,
      adresse_remplacement,
      societe_a_facturer,
      adresse_facturation,
      numero_tva,
      siret
    } = req.body;

    await db.query(
      `INSERT INTO reservations 
        (nom_client, prenom_client, telephone_client, enseigne, adresse_remplacement, societe_a_facturer, adresse_facturation, numero_tva, siret)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [
        nom_client,
        prenom_client,
        telephone_client,
        enseigne,
        adresse_remplacement,
        societe_a_facturer,
        adresse_facturation,
        numero_tva,
        siret
      ]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
