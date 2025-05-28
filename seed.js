const db = require('./db');

const seed = async () => {
  try {
    // Création de la table si elle n'existe pas
    await db.query(`
      CREATE TABLE IF NOT EXISTS remplacants (
        id SERIAL PRIMARY KEY,
        prenom VARCHAR(100),
        nom VARCHAR(100)
      )
    `);

    // Insertion de données
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
    console.error('❌ Erreur lors de l\'insertion des données :', err);
    process.exit(1);
  }
};

seed();
