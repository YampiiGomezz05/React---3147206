import { z } from "zod";
import { fileSchema } from "@/shared";

export const userSchema = z.object({

    userName : z
        .string()
        .min(3, "El nombre debe tener minimo 3 caracteres")
        .max(60, "El nombre es demasiado largo"),

    userEmail: z
        .string()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Debe ingresar un email"),
        
    userPhone: z
        .string()
        .regex(/^[0-9]{10}$/, "El telefono debe tener 10 digitos"),
        
    userDocumentType: z
        .string()
        .min(1, "Debe seleccionar un tipo de documento"),
        
    userDocumentNumber: z
        .string()
        .min(5, "Numero de documento invalido")
        .max(20, "Numero de documento demasiado largo"),
        
    userPassword: z    
        .string()
        .min(8, "Contraseña debe tener minimo 8 caracteres")
        .regex(/[A-Z]/, "Debe contener al menos una mayuscula")
        .regex(/[a-z]/, "Debe contener al menos una minuscula")
        .regex(/[0-9]/, "Debe contener al menos un numero")
        .regex(/[^A-Za-z0-9]/, "Debe contener al menos un caracteres especial"),

    userImage: fileSchema.shape.files.optional()

});