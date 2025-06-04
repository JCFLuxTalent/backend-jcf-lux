CREATE TABLE IF NOT EXISTS remplacants (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  prenom VARCHAR(100) NOT NULL,
  qualification VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS disponibilites (
  id SERIAL PRIMARY KEY,
  idremplacant INTEGER REFERENCES remplacants(id),
  date DATE NOT NULL
);
