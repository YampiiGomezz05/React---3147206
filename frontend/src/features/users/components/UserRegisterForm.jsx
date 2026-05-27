import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectServices.js";
import { Input, Button, Select, Checkbox, IconButton, Dropdown, DropdownTrigger, DropdownContent ,DropdownItem, FileInput } from "@/shared";
import { userSchema } from '../schemas/userSchema.js';
import { Link, Navigate, useNavigate } from "react-router-dom"
import { SquareArrowRightEnter, Menu } from "lucide-react";

export default function UserRegisterForm() {
    const Navigate = useNavigate();

    const [documentTypes, setDocumentTypes] = useState([]);
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        // Flags booleanos
        isStaff:false,
        isActive: true,
        isSuperUser: false,
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    }, [])

    // ==============================================
    //               Handle Genérico 
    // ==============================================

    // Funcion que se ejecuta cada vez que cambia el valor de un input del formulario

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor 
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado
            ...prev,

            // Se actualiza unicamente lo que cambió
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // ==============================================
    //               Handle Genérico 
    // ==============================================

    // Funcion que se ejecuta cuando se envia el formulario

    const handleSubmit = (e) => {

        e.preventDefault();

        const result = userSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                fieldErrors[field] = issue.message;
            });
            
            setErrors(fieldErrors);
            return;
        }

        setErrors({})

        console.log("Usuario valido:", result.data);
        
    };

    return (
        <div>
            <h1 className="text-text-primary text-2x1 mb-6 text-center">
                Registro de Usuarios 
            </h1>

            <form
            className="grid grid-cols-1 items-center gap-6"
            onSubmit={handleSubmit}
            >
            
                <div className="grid 
                grid-cols-1
                sm:grid-cols-2
                gap-6 
                my-0 
                mx-auto  
                border-1 
                p-[48px] 
                rounded-[6px]  
                pt-6">
                    
                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        value={formData.userName}
                        onChange={handleChange}
                        error={errors.userName}
                    />
                    <Input
                        label="Correo"
                        name="userEmail"
                        placeholder="Ingrese su correo"
                        value={formData.userEmail}
                        type="email"
                        onChange={handleChange}
                        error={errors.userEmail}
                    />
                    <Input
                        label="Teléfono"
                        name="userPhone"
                        placeholder="Ingrese su telefono"
                        value={formData.userPhone}
                        type="tel"
                        onChange={handleChange}
                        error={errors.userPhone}
                    />
                    <Select
                        label="Tipo de documento"
                        name="userDocumentType"
                        value={formData.userDocumentType}
                        options={documentTypes}
                        onChange={handleChange}
                        error={errors.userDocumentType}
                    />
                    <Input
                        label="Numero de documento"
                        name="userDocumentNumber"
                        placeholder="Ingrese su numero de documento"
                        value={formData.userDocumentNumber}
                        onChange={handleChange}
                        error={errors.userDocumentNumber}
                    />
                    <Input
                        label="Contraseña"
                        name="userPassword"
                        placeholder="Ingrese su contraseña"
                        value={formData.userPassword}
                        type="password"
                        onChange={handleChange}
                        error={errors.userPassword}
                    />
                    <Checkbox
                        id="isStaff"
                        name="isStaff"
                        label="Es Staff"
                        checked={formData.isStaff}
                        onChange={handleChange}
                    />
                    <Checkbox
                        id="isActive"
                        name="isActive"
                        label="Está Activo"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />
                    <Checkbox
                        id="isAdmin"
                        name="isAdmin"
                        label="Es Administrador"
                        checked={formData.isAdmin}
                        onChange={handleChange}
                    />

                    <FileInput
                        value={formData.userImage}
                        onChange={(files) => 
                            setFormData((prev) => ({ ...prev, userImage: files }))
                        }
                        multiple={true}
                    />
                    {errors.userImage && (
                        <span className="text-red-500 text-sm">{errors.userImage}</span>
                    )}

                    {/* Actions */}
                    <div className="flex items-end justify-end gap-6">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={()=> Navigate(-1)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="primary"
                            size="md"
                        >
                            Guardar
                        </Button>

                        {/* Icon button */}
                        {/* <Link to="/DashboardLayout">
                            <IconButton
                            onClick={() => Navigate("/DashboardLayout")}>
                                <SquareArrowRightEnter/>
                            </IconButton>
                        </Link> */}

                        {/* Dropdown */}

                        <div className="p-10">
                            <Dropdown>
                                <DropdownTrigger>
                                    <IconButton ariaLabel="Menú de usuario">
                                        <Menu/>
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to="/auth" className="block w-full">
                                            Autenticación
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <Link to="/dashboard" className="block w-full">
                                            Panel de control
                                        </Link>
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </div>
                        {/* <Link to="/dashboard">
                            <IconButton
                            onClick={() => Navigate("/DashboardLayout")}>
                                <SquareArrowRightEnter/>
                            </IconButton>
                        </Link> */}
                    </div>
                </div>
            </form>  
        </div>
    );
}