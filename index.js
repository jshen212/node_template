const express = require('express');
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
const app = express();

app
    .get('/', (req, res) => res.send('HELLO WORLD'))
    .get('/db', async (req, res) => {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * from test_table');
            const results = { 'results': (result) ? result.rows : null };
            res.send(results);
        } catch (error) {
            console.error(error);
            res.send('Error getting /db: ', error);
        } finally {
            client.release();
        }
    });

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});