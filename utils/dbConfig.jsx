import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:D9FVTY2uscxj@ep-shy-feather-a5gkvrfr.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require'
);
export const db = drizzle(sql,{schema});