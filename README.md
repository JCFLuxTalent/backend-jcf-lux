# Backend - JCF Lux Talent

Ce backend ExpressJS sert l’API de réservation JCF Lux Talent.

## Endpoints

- `/` : test de fonctionnement
- `/api/remplacants` : liste dynamique depuis PostgreSQL

## Commandes utiles

- `npm install`
- `npm run seed` → crée et insère des données dans la table `remplacants`
- `npm start` → lance le serveur

## Environnement (.env)

Crée un fichier `.env` avec :

```
DATABASE_URL=postgresql://user:password@host:port/dbname
```

## Déploiement

Compatible avec Railway + GitHub (ExpressJS template).
