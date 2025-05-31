const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/reservations', (req, res) => {
    console.log('Nouvelle réservation reçue :', req.body);
    res.send('Réservation bien reçue, merci !');
});

app.get('/', (req, res) => {
    res.send('API JCF Lux Talent en ligne');
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
