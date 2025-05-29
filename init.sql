DROP TABLE IF EXISTS remplacants;

CREATE TABLE remplacants (
  id SERIAL PRIMARY KEY,
  prenom VARCHAR(100),
  nom VARCHAR(100)
);
