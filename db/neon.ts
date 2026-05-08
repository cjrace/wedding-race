"use server";

import { neon } from "@neondatabase/serverless";

let sql: any;
if (process.env.DATABASE_URL) {
  sql = neon(process.env.DATABASE_URL);
} else {
  const verbose = process.env.MOCK_DB_VERBOSE === "1";
  sql = async (...args: any[]) => {
    if (verbose) {
      console.warn(
        "[MOCK DB] DATABASE_URL not set, returning empty result for:",
        args,
      );
    }
    return [];
  };
}

export default sql;
