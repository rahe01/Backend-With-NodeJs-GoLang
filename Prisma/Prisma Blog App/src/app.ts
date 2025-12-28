import express, { Request, Response } from "express";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors"
import config from "./config";



const app = express();

app.use(cors({
    origin: config.app_url,
    credentials:true
}))



app.all("/api/auth/{*any}", toNodeHandler(auth));




app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello this is raheeee");
});

app.use("/posts", postRouter);

export default app;
