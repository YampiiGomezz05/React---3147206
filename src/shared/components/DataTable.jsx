    import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getFilteredRowModel
    } from "@tanstack/react-table"

    import { Link } from "react-router-dom";
    import { useState } from "react"
    import { Button } from "@/shared/"

    export default function DataTable({ data, columns }) {

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5
    })

    const [globalFilter, setGlobalFilter] = useState("")

    const table = useReactTable({
        data,
        columns,
        state: {
        globalFilter,
        pagination
        },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="space-y-4">

        {/* ================== TOOLBAR ================== */}
        <div className="flex flex-col gap-3">

            <div className="flex items-center justify-between gap-4">

            {/* Buscador */}
            <input
                type="text"
                placeholder="Buscar..."
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="border rounded px-3 py-2 w-64"
            />

            </div>

            {/* FILA 2: Selector de filas */}
            <div className="flex justify-end">
            <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
                className="border rounded px-2 py-2"
            >
                {[5, 7, 10, 20, 50].map(size => (
                <option key={size} value={size}>
                    {size} filas
                </option>
                ))}
            </select>
            </div>

        </div>

        {/* ================== TABLA ================== */}
        <div className="overflow-x-auto border rounded">
            <table className="w-full">

            {/* CABECERA */}
            <thead className="bg-gray-100">
                {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                    <th
                        key={header.id}
                        className="p-3 text-left border-b"
                    >
                        {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                        )}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>

            {/* CUERPO */}
            <tbody>
                {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="p-3 border-b">
                        {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>

            </table>
        </div>

        {/* ================== FOOTER ================== */}
        <div className="flex items-center justify-between">

            {/* Información de registros */}
            <span className="text-sm text-gray-600">
            Mostrando {table.getRowModel().rows.length} de{" "}
            {table.getFilteredRowModel().rows.length} registros
            </span>

            {/* Controles de paginación */}
            <div className="flex items-center gap-2">

            <Button
                size="sm"
                variant="secondary"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
            >
                Inicio
            </Button>

            <Button
                size="sm"
                variant="secondary"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Anterior
            </Button>

            <span className="text-sm px-2">
                Página {table.getState().pagination.pageIndex + 1} de{" "}
                {table.getPageCount()}
            </span>

            <Button
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Siguiente
            </Button>

            <Button
                size="sm"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
            >
                Final
            </Button>

            </div>

        </div>

        {/* ================== IR A PÁGINA ================== */}
        <div className="flex items-center gap-2 text-sm">

            <span>Ir a página:</span>

            <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
            }}
            className="border rounded px-2 py-1 w-16"
            />

        </div>

        </div>
    )
    }