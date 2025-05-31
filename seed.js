
const db = require('./db');

const seed = async () => {
  try {
    await db.query(\`
      INSERT INTO remplacants (prenom, nom)
      VALUES 
        ('Léa', 'Dupont'),
        ('Hugo', 'Martin')
      ON CONFLICT DO NOTHING
    \`);

    console.log('✅ Données insérées avec succès');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur insertion données :', err);
    process.exit(1);
  }
};

seed();
