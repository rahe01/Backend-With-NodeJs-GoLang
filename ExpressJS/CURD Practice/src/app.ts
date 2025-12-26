import { Request, Response } from "express";
import { authRoutes } from "./modules/auth/auth.routes";
import { userRoutes } from "./modules/user/user.routes";
const express = require("express");
const app = express();
app.use(express.json())



app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is Raheeeeeeeeeeeeeeeeeeeeee");
});





// *************Auth Routes*************
app.use('/api/v1/auth' , authRoutes);


// *************User Routes*************
app.use('/users' , userRoutes)





export default app;
