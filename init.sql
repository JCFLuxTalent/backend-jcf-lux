CREATE TABLE IF NOT EXISTS remplacants (
  id SERIAL PRIMARY KEY,
  prenom VARCHAR(100),
  nom VARCHAR(100),
  qualification VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS disponibilites (
  id SERIAL PRIMARY KEY,
  id_remplacant INTEGER REFERENCES remplacants(id),
  date DATE
);
