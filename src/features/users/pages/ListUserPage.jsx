    import DataTable from "@/shared/components/DataTable"
    import { userColumns } from "../table/userColumns"
    import { users } from "../data/users"
    import { Button } from "@/shared/"
    import { Link } from "react-router-dom"

    export default function ListUserPage() {

    const actions = (
        <>
        <Link to="/users/create">
            <Button variant="primary" size="md">
            Crear Usuario
            </Button>
        </Link>

        <Link to="/reports/create">
            <Button variant="secondary" size="md">
            Crear Reporte
            </Button>
        </Link>
        </>
    )

    return (
        <div className="p-6">

        <h1 className="text-xl font-semibold mb-4">
            Usuarios
        </h1>

        <DataTable
            data={users}
            columns={userColumns}
            actions={actions}
        />

        </div>
    )
    }