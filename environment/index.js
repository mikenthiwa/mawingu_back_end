import dotenv from 'dotenv';

dotenv.config();

export default {
  database: {
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL,
  }
}
