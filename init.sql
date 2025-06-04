CREATE TABLE IF NOT EXISTS reservations (
  id SERIAL PRIMARY KEY,
  nom_client VARCHAR(100),
  prenom_client VARCHAR(100),
  telephone_client VARCHAR(30),
  enseigne VARCHAR(100),
  adresse_remplacement VARCHAR(200),
  societe_a_facturer VARCHAR(100),
  adresse_facturation VARCHAR(200),
  numero_tva VARCHAR(30),
  siret VARCHAR(30),
  date_debut DATE NOT NULL,
  date_fin DATE NOT NULL
);