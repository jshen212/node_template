const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.PORT || 5000;
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
            console.log('test pipeline change 2');
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