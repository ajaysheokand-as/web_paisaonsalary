// src/db/query.js
import pool from './index.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function query(sql, params = []) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const startTime = Date.now();
    let connection;

    try {
      connection = await pool.getConnection();
      const [rows] = await connection.execute(sql, params);
      const duration = Date.now() - startTime;

      if (duration > 1000) {
        console.warn(`[Slow Query] Took ${duration}ms: ${sql}`);
      }

      console.info(`[Query Success] Attempt ${attempt + 1} | Duration: ${duration}ms`);
      return rows;
    } catch (error) {
      const duration = Date.now() - startTime;

      const isRetryable = error.fatal ||
        ['PROTOCOL_CONNECTION_LOST', 'ECONNRESET', 'ETIMEDOUT', 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR', 'ECONNREFUSED', 'EHOSTUNREACH'].includes(error.code);

      console.error(`[Query Error] Attempt ${attempt + 1} | Duration: ${duration}ms`, {
        code: error.code,
        errno: error.errno,
        sqlState: error.sqlState,
        sqlMessage: error.sqlMessage,
        message: error.message,
        stack: error.stack
      });

      if (!isRetryable || attempt === MAX_RETRIES) {
        throw new Error(`Database query failed after ${attempt + 1} attempt(s): ${error.sqlMessage || error.message}`);
      }

      console.log(`Retrying query in ${RETRY_DELAY * (attempt + 1)}ms...`);
      await sleep(RETRY_DELAY * (attempt + 1));
    } finally {
      if (connection) {
        try {
          connection.release();
        } catch (releaseError) {
          console.error('[Connection Release Error]', {
            message: releaseError.message,
            stack: releaseError.stack
          });
        }
      }
    }
  }
}
