//Rutas de autenticacion

import {Router} from "express";
import { authController } from "./auth.controller.js"


const router = Router();

//Post /Api/auth/login

router.post("/login" , authController.login)

export default router