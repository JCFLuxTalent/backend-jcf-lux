INSERT INTO remplacants (nom, prenom, qualification) VALUES
  ('Dupont', 'Léa', 'BTS'),
  ('Martin', 'Hugo', 'Licence')
ON CONFLICT DO NOTHING;

