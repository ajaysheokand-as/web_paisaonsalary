// src/db/query.js
import pool from './index.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function query(sql, params = [], retryCount = 0) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('Database query error:', {
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage,
      message: error.message,
      stack: error.stack
    });

    // Check if error is retryable
    const isRetryable = error.code === 'PROTOCOL_CONNECTION_LOST' || 
                       error.code === 'ECONNRESET' ||
                       error.code === 'ETIMEDOUT' ||
                       error.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' ||
                       error.code === 'ECONNREFUSED' ||
                       error.code === 'EHOSTUNREACH';

    if (isRetryable && retryCount < MAX_RETRIES) {
      console.log(`Retrying query (attempt ${retryCount + 1}/${MAX_RETRIES})...`);
      await sleep(RETRY_DELAY * (retryCount + 1)); // Exponential backoff
      return query(sql, params, retryCount + 1);
    }

    // If not retryable or max retries reached, throw error
    throw new Error(`Database query failed: ${error.sqlMessage || error.message}`);
  }
}