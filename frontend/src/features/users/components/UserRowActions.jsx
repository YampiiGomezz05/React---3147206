    import { Pencil, EllipsisVertical } from "lucide-react";
    import { useNavigate, Link } from "react-router-dom";
    import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    IconButton,
    } from "@/shared/"; 

    export default function UserRowActions({ user }) {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/users/${user.id}/edit`);
    };


    return (
        <div className="flex gap-2">

        {/* Botón editar */}
        <button
            onClick={handleEdit}
            className="p-1 rounded hover:bg-gray-100"
        >
            <Pencil size={16} />
        </button>

        <Dropdown>
            <DropdownTrigger>
            <IconButton ariaLabel="Más opciones">
                <EllipsisVertical size={16} />
            </IconButton>
            </DropdownTrigger>

            <DropdownContent className="right-0 w-48">
            <DropdownItem>
                <Link to="" className="block w-full">
                Opcion 1
                </Link>
            </DropdownItem>

            <DropdownItem>
                <Link to="" className="block w-full">
                Opcion 2
                </Link>
            </DropdownItem>

            <DropdownItem>
                <Link to="" className="block w-full">
                Opcion 3
                </Link>
            </DropdownItem>

            </DropdownContent>
        </Dropdown>

        </div>
    );
    }