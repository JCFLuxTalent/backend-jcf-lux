const db = require('./db');

const seed = async () => {
  try {
    await db.query(\`
      INSERT INTO disponibilites (id_remplacant, date)
      VALUES
        (1, '2025-06-01'),
        (1, '2025-06-07'),
        (2, '2025-06-10'),
        (2, '2025-06-17')
    \`);
    console.log('✅ Données insérées dans disponibilites avec succès !');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur lors de l\'insertion des disponibilites :', err);
    process.exit(1);
  }
};

seed();