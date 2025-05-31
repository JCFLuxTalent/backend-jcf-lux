const db = require('./db');

const seed = async () => {
  try {
    // Création de la table disponibilites
    await db.query(`
      CREATE TABLE IF NOT EXISTS disponibilites (
        id SERIAL PRIMARY KEY,
        id_remplacant INTEGER NOT NULL,
        date_disponibilite DATE NOT NULL
      )
    `);

    // Insertion de données
    await db.query(`
      INSERT INTO disponibilites (id_remplacant, date_disponibilite)
      VALUES
        (3, '2025-06-01'),
        (3, '2025-06-07'),
        (4, '2025-06-10'),
        (4, '2025-06-17')
    `);

    console.log('✅ Données insérées dans disponibilites');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur lors de l'insertion des disponibilités :', err);
    process.exit(1);
  }
};

seed();