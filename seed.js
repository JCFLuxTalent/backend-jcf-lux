const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const sql = fs.readFileSync('./init.sql', 'utf-8');

pool.query(sql)
  .then(() => {
    console.log('✅ Données insérées avec succès');
    pool.end();
  })
  .catch(err => {
    console.error('❌ Erreur lors de l\'insertion :', err);
    pool.end();
  });
