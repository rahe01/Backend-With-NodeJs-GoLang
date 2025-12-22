import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
  connectionString: `${config.connection_str}`,
});

const initDB = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL ,
        password TEXT NOT NULL,
        phone VARCHAR(50),
        role VARCHAR(50) NOT NULL CHECK(role IN ('admin', 'customer')) 
         
        )     
        `);

    console.log("Table created successfully");
  } catch (error: any) {
    throw error;
  }
};

export default initDB;
