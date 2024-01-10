import express from "express";  
import { homeController, loginController, registerController } from "../controller/homeController.js";
const router=express.Router();

router.get('/',homeController)

router.get('/login',loginController)

router.get('/register',registerController)



export default router;