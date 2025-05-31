DROP TABLE IF EXISTS disponibilites;
CREATE TABLE IF NOT EXISTS disponibilites (
    id SERIAL PRIMARY KEY,
    id_remplacant INTEGER NOT NULL,
    date DATE NOT NULL
);