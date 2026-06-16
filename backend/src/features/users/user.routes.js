import { Router } from "express";
import { userController } from "./user.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import multer from "multer";

// Creamos un router independiente para las rutas del modulo de usuarios.
// Este router se monta en app.js bajo el prefijo /api/users.
const router = Router();

// Multer permite recibir datos enviados como multipart/form-data.
// En este caso no se define storage, por eso los archivos quedan en memoria.
const upload = multer({dest: "uploads/"}); 

// Ruta para crear usuarios.
// Orden de ejecucion:
// 1. authenticateToken valida que la peticion tenga un JWT valido.
// 2. upload.any() procesa los campos y archivos enviados desde el FormData.
// 3. userController.create maneja la creacion del usuario.
router.post("/",
    upload.any("userImage"), 
    userController.create
);

export default router;
