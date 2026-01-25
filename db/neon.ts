"use server";

import { neon } from "@neondatabase/serverless";

let sql: any;
if (process.env.DATABASE_URL) {
  sql = neon(process.env.DATABASE_URL);
} else {
  // Mock: returns empty array for any query, logs a warning
  sql = async (...args: any[]) => {
    console.warn(
      "[MOCK DB] DATABASE_URL not set, returning empty result for:",
      args,
    );
    return [];
  };
}

export default sql;
