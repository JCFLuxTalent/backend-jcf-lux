DROP TABLE IF EXISTS "Remplaçants";

CREATE TABLE IF NOT EXISTS disponibilites (
  id SERIAL PRIMARY KEY,
  idRemplacant INTEGER,
  date DATE
);
