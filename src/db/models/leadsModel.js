// src/db/models/leadModel.js
import { query } from '../query.js';

/**
 * Get all leads (optional limit or filters can be added)
 */
export async function getAllLeads(limit = 100) {
  return await query('SELECT * FROM leads ORDER BY created_at DESC LIMIT ?', [limit]);
}

/**
 * Get a lead by ID
 */
export async function getLeadById(id) {
  return await query('SELECT * FROM leads WHERE id = ?', [id]);
}

/**
 * Find leads by email
 */
export async function findLeadsByEmail(email) {
  return await query('SELECT * FROM leads WHERE email = ?', [email]);
}


/**
 * Get leads with flexible filters, ordering, and limit.
 *
 * @param {Object} options - Options for filtering and retrieval
 * @param {Object} [options.where] - Key-value pairs of fields to filter by (e.g., { email: 'a@b.com' })
 * @param {string} [options.orderBy] - Column name to order by (e.g., 'created_at')
 * @param {'ASC'|'DESC'} [options.order] - Sort order (default is 'DESC')
 * @param {number} [options.limit] - Limit the number of returned results
 * @param {boolean} [options.single] - Return only the first matched record
 * 
 * @returns {Promise<Object|Object[]>} - A single lead or an array of leads
 *
 * @example
 *   await getLeads({ where: { email: 'abc@xyz.com' }, limit: 1, single: true });
 *   await getLeads({ where: { status: 'open', source: 'web' }, orderBy: 'created_at' });
 */
export async function getLeads(options = {}) {
  const {
    where = {},
    orderBy,
    order = 'DESC',
    limit,
    single = false,
  } = options;

  // Allowed fields to avoid SQL injection
  const allowedFields = ['id', 'email', 'phone', 'status', 'source', 'created_on','pancard'];
  const whereClauses = [];
  const values = [];

  // Build WHERE clause
  for (const [key, val] of Object.entries(where)) {
    if (!allowedFields.includes(key)) {
      throw new Error(`Invalid field name in where: ${key}`);
    }
    whereClauses.push(`\`${key}\` = ?`);
    values.push(val);
  }

  let sql = 'SELECT * FROM leads';

  if (whereClauses.length > 0) {
    sql += ' WHERE ' + whereClauses.join(' AND ');
  }

  if (orderBy) {
    if (!allowedFields.includes(orderBy)) {
      throw new Error(`Invalid orderBy field: ${orderBy}`);
    }
    sql += ` ORDER BY \`${orderBy}\` ${order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'}`;
  }

  if (limit && !isNaN(limit)) {
    sql += ' LIMIT ?';
    values.push(Number(limit));
  }

  const results = await query(sql, values);
  return single ? results[0] : results;
}


/**
 * Create a new lead
 */
export async function createLead({ name, email, phone }) {
  return await query(
    'INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)',
    [name, email, phone]
  );
}

/**
 * Update a lead
 */
export async function updateLead(id, updates) {
  const fields = [];
  const values = [];

  for (const [key, value] of Object.entries(updates)) {
    fields.push(`${key} = ?`);
    values.push(value);
  }

  values.push(id);

  const sql = `UPDATE leads SET ${fields.join(', ')} WHERE id = ?`;
  return await query(sql, values);
}

/**
 * Delete a lead
 */
export async function deleteLead(id) {
  return await query('DELETE FROM leads WHERE id = ?', [id]);
}
