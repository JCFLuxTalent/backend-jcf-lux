# JCF Lux Talent - Module de Réservation

Bienvenue dans le système de réservation de remplaçants spécialisé en optique pour la société **JCF Lux Talent**, réservé exclusivement aux enseignes **Krys Group** (Krys, Collectif des Lunetiers, Lynx Optique, YouDo).

## 🔧 Fonctionnalités principales

- Interface client pour réserver un remplaçant en ligne.
- Interface back-office pour la gestion des affectations de remplaçants.
- Visualisation des disponibilités des remplaçants (jours fériés colorés, dimanches indiqués).
- Réservation par période (semaine, quinzaine, mois).
- Système de suppression automatique des disponibilités après réservation.
- Synchronisation possible avec Google Sheets et Google Calendar.

## 📦 Technologies utilisées

- Node.js / Express
- Railway pour l'hébergement (backend & base de données PostgreSQL)
- GitHub pour le versioning
- Google Workspace (Sheets + Calendar) pour la gestion back-office

## 🚀 Déploiement rapide

1. Cloner le projet : `git clone https://github.com/ton-compte/nom-du-repo.git`
2. Ajouter un fichier `.env` à la racine avec les informations Railway
3. Installer les dépendances : `npm install`
4. Lancer le serveur local : `node server.js` ou `npm start`
5. Déployer sur Railway depuis GitHub

## 📁 Structure du projet

```
.
├── server.js         # Fichier principal du backend
├── routes.js         # (Facultatif) Routes API personnalisées
├── .env              # Informations de connexion (non public)
├── package.json      # Dépendances et scripts
├── README.md         # Documentation du projet
```

## 👤 Auteur

MALLAVERGNE Jean - mogroupe@gmail.com
