import express, { Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";



const app = express();


// parser
app.use(express.json());


// initializing db
initDB();



app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World! Next level");
});

// ====================== Users CRUD ===========================
app.use("/users" , userRoutes)





// =================Todos CRUD ================================
app.use("/todos", todoRoutes);





// ======================auth route ===========================
app.use("/auth" , authRoutes)






// ==================Not found=================================

app.use((req:Request, res: Response) =>{

    res.status(404).json({
        success:false,
        message: "Route not found",
        path: req.path
    })


})




export default app;