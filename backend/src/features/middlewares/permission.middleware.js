import { accessService } from "../access/access.service";

export const requeriePermission = (permissionCode) =>{
    return async (req , res , next) => {
        const userId = req.user.id;


        const granted = await accessService.hasPermission(userId, permissionCode);


        if(!granted) {
            return res.status(403).json ({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        next();
    }
}