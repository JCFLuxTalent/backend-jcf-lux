DROP TABLE IF EXISTS disponibilites;
DROP TABLE IF EXISTS remplacants;

CREATE TABLE remplacants (
  id SERIAL PRIMARY KEY,
  prenom VARCHAR(100),
  nom VARCHAR(100)
);

CREATE TABLE disponibilites (
  id SERIAL PRIMARY KEY,
  id_remplacant INTEGER REFERENCES remplacants(id),
  date DATE
);
