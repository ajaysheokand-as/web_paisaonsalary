// src/db/index.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host:  process.env.MYSQL_HOST || process.env?.__NEXT_PRIVATE_STANDALONE_CONFIG?.env?.MYSQL_HOST ,
  port:  process.env.MYSQL_PORT || process.env?.__NEXT_PRIVATE_STANDALONE_CONFIG?.env?.MYSQL_PORT,
  user:  process.env.MYSQL_USER || process.env?.__NEXT_PRIVATE_STANDALONE_CONFIG?.env?.MYSQL_USER,
  password:  process.env.MYSQL_PASSWORD || process.env?.__NEXT_PRIVATE_STANDALONE_CONFIG?.env?.MYSQL_PASSWORD,
  database:  process.env.MYSQL_DATABASE || process.env?.__NEXT_PRIVATE_STANDALONE_CONFIG?.env?.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
