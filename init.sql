CREATE TABLE IF NOT EXISTS disponibilites (
  id SERIAL PRIMARY KEY,
  id_remplacant INTEGER NOT NULL,
  date_disponibilite DATE NOT NULL
);
