// src/db/query.js
import pool from './index.js';

export async function query(sql, params = []) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);

    // You can throw a custom error or rethrow the original
    // Option 1: throw with a friendly message
    throw new Error(`Database query failed: ${error.sqlMessage || error.message}`);

    // Option 2: rethrow the original error (if you want the caller to handle it)
    // throw error;
  }
}