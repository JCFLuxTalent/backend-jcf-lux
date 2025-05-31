-- Crée la table remplaçants
CREATE TABLE IF NOT EXISTS remplacants (
  id SERIAL PRIMARY KEY,
  prenom VARCHAR(100),
  nom VARCHAR(100),
  qualification VARCHAR(100)
);

-- Crée la table disponibilités
CREATE TABLE IF NOT EXISTS disponibilites (
  id SERIAL PRIMARY KEY,
  idremplacant INTEGER NOT NULL,
  date DATE NOT NULL,
  FOREIGN KEY (idremplacant) REFERENCES remplacants(id) ON DELETE CASCADE
);

-- Crée la table clients
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  enseigne VARCHAR(100),
  adresse_remplacement TEXT,
  societe_facturation VARCHAR(100),
  adresse_facturation TEXT,
  tva_intracom VARCHAR(50),
  siret VARCHAR(20)
);

-- Crée la table tarifs
CREATE TABLE IF NOT EXISTS tarifs (
  id SERIAL PRIMARY KEY,
  idremplacant INTEGER NOT NULL,
  jour DECIMAL(10, 2),
  semaine DECIMAL(10, 2),
  quinzaine DECIMAL(10, 2),
  mois DECIMAL(10, 2),
  frais_hebergement DECIMAL(10, 2),
  frais_deplacement DECIMAL(10, 2),
  frais_repas DECIMAL(10, 2),
  FOREIGN KEY (idremplacant) REFERENCES remplacants(id) ON DELETE CASCADE
);