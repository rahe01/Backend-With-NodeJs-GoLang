import { Router } from "express";
import { userControllers } from "./user.controller";



const router = Router();



router.patch("/change-password" , userControllers.userPasswordReset);




export const userRoutes = router;