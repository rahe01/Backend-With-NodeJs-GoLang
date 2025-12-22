import { Request, Response } from "express";
import { authRoutes } from "./modules/auth/auth.routes";
const express = require("express");
const app = express();


app.use(express.json())



app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is Raheeeeeeeeeeeeeeeeeeeeee");
});






app.use('/api/v1/auth' , authRoutes);

























export default app;
