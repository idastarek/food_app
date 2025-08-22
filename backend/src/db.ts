import { Client } from 'pg';
import { config } from 'dotenv';
config();

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

db.connect()
  .then(() => {
    console.log('Database connected successfully');
    return db.query('SELECT NOW()');
  })
  .then((result) => {
    console.log('Current timestamp from database:', result.rows[0]);
  })
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

db.query('SELECT current_database()', []).then((res) => {
  console.log('Connected to database:', res.rows[0].current_database);
});

db.on('error', (err) => {
  console.error('Database error:', err);
  process.exit(1);
});

export const query = (text: string, params: any[]) => {
  return db.query(text, params);
};
