const express = require('express');
const router = express.Router();
const db = require('./db');

// ... (autres routes GET/POST déjà existantes)

router.post('/api/reservations', async (req, res) => {
  try {
    const { nom_client, prenom_client, telephone_client, enseigne, adresse_remplacement, societe_a_facturer, adresse_facturation, numero_tva, siret, date_debut, date_fin } = req.body;
    await db.query(
      `INSERT INTO reservations 
        (nom_client, prenom_client, telephone_client, enseigne, adresse_remplacement, societe_a_facturer, adresse_facturation, numero_tva, siret, date_debut, date_fin) 
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [nom_client, prenom_client, telephone_client, enseigne, adresse_remplacement, societe_a_facturer, adresse_facturation, numero_tva, siret, date_debut, date_fin]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('Erreur POST /api/reservations:', err);
    res.status(500).json({ error: 'Erreur serveur (insertion réservation)' });
  }
});

module.exports = router;