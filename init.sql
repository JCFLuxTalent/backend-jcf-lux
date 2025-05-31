
-- Création de la table des remplaçants (si non existante)
CREATE TABLE IF NOT EXISTS remplacants (
    id SERIAL PRIMARY KEY,
    prenom VARCHAR(100),
    nom VARCHAR(100),
    qualification VARCHAR(100)
);

-- Création de la table des disponibilités (si non existante)
CREATE TABLE IF NOT EXISTS disponibilites (
    id SERIAL PRIMARY KEY,
    idremplacant INT REFERENCES remplacants(id),
    date DATE NOT NULL
);

-- Création de la table des réservations
CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    nom_client VARCHAR(100),
    prenom_client VARCHAR(100),
    telephone_client VARCHAR(20),
    enseigne VARCHAR(100),
    adresse_remplacement TEXT,
    societe_a_facturer VARCHAR(100),
    adresse_facturation TEXT,
    numero_tva VARCHAR(50),
    siret VARCHAR(20),
    idremplacant INT REFERENCES remplacants(id),
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL
);
