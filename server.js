const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db'); // Assure-toi d'avoir ce fichier

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sert les fichiers statiques depuis le dossier public (dont formulaire.html)
app.use(express.static(path.join(__dirname, 'public')));

// Page d’accueil simple (optionnel)
app.get('/', (req, res) => {
  res.send('API JCF Lux Talent en ligne');
});

// Endpoint POST réservation (clé-en-main)
app.post('/api/reservations', async (req, res) => {
  try {
    const {
      nom_client, prenom_client, telephone_client, enseigne,
      adresse_remplacement, societe_a_facturer, adresse_facturation,
      numero_tva, siret, date_debut, date_fin
    } = req.body;

    await db.query(
      `INSERT INTO reservations
        (nom_client, prenom_client, telephone_client, enseigne, adresse_remplacement, societe_a_facturer, adresse_facturation, numero_tva, siret, date_debut, date_fin)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        nom_client, prenom_client, telephone_client, enseigne,
        adresse_remplacement, societe_a_facturer, adresse_facturation,
        numero_tva, siret, date_debut, date_fin
      ]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('Erreur POST /api/reservations:', err);
    res.status(500).json({ error: 'Erreur serveur (insertion réservation)' });
  }
});

// Tu peux ajouter ici d’autres endpoints (GET/POST) pour remplaçants, clients, etc.

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});