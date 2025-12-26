import { Router } from "express";
import { userControllers } from "./user.controller";



const router = Router();



router.patch("/change-password/:id" , userControllers.userPasswordReset);




export const userRoutes = router;