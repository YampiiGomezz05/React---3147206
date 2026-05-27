import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/bg-1.jpg";
import { CreateUserPage } from "@/features/users";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { ArrowBigLeftDash } from "lucide-react"
import { IconButton } from "@/shared";
import { Navbar } from "@/shared";
import { HomePage } from "@/features/home";


export default function MainLayout () {
    const Navigate = useNavigate();

    return(   
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo con imagen */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(${heroBg})`}}
            />
            <Link to="/auth">
                    <IconButton
                            onClick={() => Navigate("/AuthLayout")}>
                        <ArrowBigLeftDash/>
                    </IconButton>
            </Link>
            <Navbar/>
                {/* Contenido dinamico de las paginas  */}
            <main>
                {/* <CreateUserPage/> */}
                <Outlet/>
            </main>
        </div>
    );
} 