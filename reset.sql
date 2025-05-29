-- Supprimer la table existante si elle est présente
DROP TABLE IF EXISTS remplacants;

-- Créer une nouvelle table sans caractères spéciaux dans le nom
CREATE TABLE remplacants (
  id SERIAL PRIMARY KEY,
  prenom VARCHAR(100),
  nom VARCHAR(100)
);

-- Insérer les remplaçants de test
INSERT INTO remplacants (prenom, nom)
VALUES
  ('Léa', 'Dupont'),
  ('Hugo', 'Martin');
