const db = require('./db');

const seed = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS remplacants (
        id SERIAL PRIMARY KEY,
        prenom VARCHAR(100),
        nom VARCHAR(100)
      )
    `);

    await db.query(`
      INSERT INTO remplacants (prenom, nom)
      VALUES
        ('Léa', 'Dupont'),
        ('Hugo', 'Martin')
      ON CONFLICT DO NOTHING
    `);

    console.log('✅ Données insérées avec succès !');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur :', err);
    process.exit(1);
  }
};

seed();
