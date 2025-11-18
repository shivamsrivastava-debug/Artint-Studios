import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,  
  user: process.env.USER,  
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

async function checkConnection() {
  try {
    
    const [rows] = await pool.query('SELECT 1'); 
    // console.log('Database connected successfully!');
    // console.log('Test query result:', rows);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

checkConnection();

export default pool;





