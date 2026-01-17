import { neon } from "@neondatabase/serverless";

// Use the DATABASE_URL environment variable for the connection string
const sql = neon(process.env.DATABASE_URL!);

export default sql;
