// Importamos el pool de conexión a PostgreSQL.
// El repository usa este pool para ejecutar consultas contra la base de datos.
import { pool } from "../../config/db.js";


export const authRepository = {
    // Busca un usuario por su correo electrónico.
    // Este método se usa durante el login para obtener los datos necesarios
    // y validar posteriormente la contraseña en la capa de servicio.
    async findByEmail(userEmail) {
        // Consulta SQL parametrizada.
        // El placeholder $1 evita concatenar directamente el email en el SQL
        // y ayuda a prevenir inyección SQL.
        const query = `
        SELECT id, user_email, password, is_active
        FROM users
        WHERE user_email = $1
        LIMIT 1;
        `;

        // Ejecutamos la consulta pasando el email como valor del placeholder.
        const result = await pool.query(query, [userEmail]);

        // Retornamos el primer usuario encontrado.
        // Si no existe un usuario con ese email, result.rows[0] será undefined.
        return result.rows[0];
    },
};
