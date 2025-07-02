import Database from './db';

// Generic function to execute queries
const executeQuery = async (
  serviceName: string,
  queryText: string,
  params: any[] = [],
) => {
  const pool = Database.getPool(serviceName);
  if (!pool) return null;

  try {
    const result = await pool.query(queryText, params);
    return result.rows;
  } catch (error) {
    console.error(`Query error in ${serviceName}:`, error);
    return null;
  }
};

// CRUD Operations

// CREATE: Insert a record
export const createRecord = async (
  serviceName: string,
  table: string,
  data: Record<string, any>,
) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');

  const queryText = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders}) RETURNING *`;

  return executeQuery(serviceName, queryText, values);
};

// READ: Fetch records with optional filters
export const getRecords = async (
  serviceName: string,
  table: string,
  conditions: Record<string, any> = {},
) => {
  let queryText = `SELECT * FROM ${table}`;
  const keys = Object.keys(conditions);
  const values = Object.values(conditions);

  if (keys.length) {
    const conditionString = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(' AND ');
    queryText += ` WHERE ${conditionString}`;
  }

  return executeQuery(serviceName, queryText, values);
};

// UPDATE: Update a record
export const updateRecord = async (
  serviceName: string,
  table: string,
  data: Record<string, any>,
  conditions: Record<string, any>,
) => {
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  const conditionKeys = Object.keys(conditions);
  const conditionValues = Object.values(conditions);

  if (!dataKeys.length || !conditionKeys.length) {
    console.error('Update requires at least one data field and one condition.');
    return null;
  }

  const setString = dataKeys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(', ');
  const conditionString = conditionKeys
    .map((key, index) => `${key} = $${dataKeys.length + index + 1}`)
    .join(' AND ');

  const queryText = `UPDATE ${table} SET ${setString} WHERE ${conditionString} RETURNING *`;

  return executeQuery(serviceName, queryText, [
    ...dataValues,
    ...conditionValues,
  ]);
};

// DELETE: Remove a record
export const deleteRecord = async (
  serviceName: string,
  table: string,
  conditions: Record<string, any>,
) => {
  const conditionKeys = Object.keys(conditions);
  const conditionValues = Object.values(conditions);

  if (!conditionKeys.length) {
    console.error('Delete requires at least one condition.');
    return null;
  }

  const conditionString = conditionKeys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(' AND ');
  const queryText = `DELETE FROM ${table} WHERE ${conditionString} RETURNING *`;

  return executeQuery(serviceName, queryText, conditionValues);
};
