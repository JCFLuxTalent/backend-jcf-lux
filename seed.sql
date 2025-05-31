
-- Insère des données de test dans les tables créées par init.sql
INSERT INTO remplacants (prenom, nom, qualification) VALUES
  ('Léa', 'Dupont', 'BTS'),
  ('Hugo', 'Martin', 'Responsable');

INSERT INTO disponibilites (idremplacant, date) VALUES
  (1, '2025-06-01'),
  (2, '2025-06-10');

INSERT INTO clients (enseigne, adresse_remplacement, societe_facturation, adresse_facturation, tva_intracom, siret) VALUES
  ('Krys', '12 rue de Paris', 'JCF Lux', '15 rue du Repos', 'FR12345678901', '78451236900017');

INSERT INTO tarifs (idremplacant, jour, semaine, quinzaine, mois, hebergement, deplacement, repas) VALUES
  (1, 150, 700, 1300, 2400, 100, 80, 60),
  (2, 180, 850, 1600, 2800, 120, 100, 80);
