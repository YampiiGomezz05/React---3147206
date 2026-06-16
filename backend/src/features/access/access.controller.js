
import {accessService} from "./access.service.js"


export const accessController = {
    async testPermissions (req , res ) {
        const userId = Number(req.params.userId);

        const hasPermissions = await accessService.hasPermission(
            userId,
            'list_user'
        );

        res.json ({
            userId,
            permissions : 'list_user',
            granted : hasPermissions,
        });
    },
};