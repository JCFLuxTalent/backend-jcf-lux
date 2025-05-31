const db = require('./db');

const seed = async () => {
  try {
    await db.query(\`
      CREATE TABLE IF NOT EXISTS remplacants (
        id SERIAL PRIMARY KEY,
        prenom VARCHAR(100),
        nom VARCHAR(100)
      )
    \`);

    await db.query(\`
      CREATE TABLE IF NOT EXISTS disponibilites (
        id SERIAL PRIMARY KEY,
        idRemplacant INTEGER REFERENCES remplacants(id),
        dispo DATE[]
      )
    \`);

    await db.query(\`
      INSERT INTO remplacants (prenom, nom)
      VALUES
        ('Léa', 'Dupont'),
        ('Hugo', 'Martin')
      ON CONFLICT DO NOTHING
    \`);

    await db.query(\`
      INSERT INTO disponibilites (idRemplacant, dispo)
      VALUES
        (1, ARRAY['2025-06-01', '2025-06-07']),
        (2, ARRAY['2025-06-10', '2025-06-17'])
      ON CONFLICT DO NOTHING
    \`);

    console.log('✅ Données insérées avec succès !');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur seed :', err);
    process.exit(1);
  }
};

seed();
