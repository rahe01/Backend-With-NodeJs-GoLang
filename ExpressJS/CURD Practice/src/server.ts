import express, { Request, Response } from "express";
import {Pool} from "pg";
import dotenv from "dotenv";
import path from "path";


dotenv.config({path: path.join(process.cwd() , ".env") })


const app = express()
const port = 5000
app.use(express.json())



// ==================DB pool=======================

const pool = new Pool({
  connectionString: process.env.CONNECTION_STR,
  ssl: { rejectUnauthorized: false }
});

const initDB = async() =>{

    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(200),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        
        )        
        `);
}

initDB();











app.get('/', (req : Request, res: Response) => {
  res.send('Hello World! i am rahe')
})






// ================User CRUD======================

app.post("/users" , async(req:Request, res:Response)=>{

    console.log(req.body);


    res.status(200).json({
        success: true,
        message: "User Post successfully",
        data: req.body
    })










})















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
