    import DataTable from "@/shared/components/DataTable"
    import { userColumns } from "../table/userColumns"
    import { users } from "../data/users"
    import { Button } from "@/shared/"
    import { Link } from "react-router-dom"
    import { useState } from "react"
    import ReportConfigModal from "../../users/reports/components/ReportConfigModal"


    export default function ListUserPage() {

    const [isReportModalOpen , setIsReporteModalOpen] = useState(false)
    const actions = (
        <>
        <Link to="/dashboard">
            <Button 
            type ="submit"
            variant="primary" 
            size="md">
            Crear Usuario
            </Button>
        </Link>

        
            <Button 
            variant="secondary" 
            size="md"
            onClick={() => setIsReporteModalOpen(true)}
            >
            Crear Reporte
            </Button>
        
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
        <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={()=>setIsReporteModalOpen(false)}
        />
        </div>
    )
    }