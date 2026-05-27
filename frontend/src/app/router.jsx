import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/shared";
import { Login } from "@/features/auth";
import { CreateUserPage , ListUserPage } from "@/features/users";
import {HomePage} from "@/features/home"


const router = createBrowserRouter([
    {
        path:"/",
        element: <Navigate to ="/auth" replace/>,
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [{ index: true, element: <h1></h1> }],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            { index: true, element: <CreateUserPage/>},
            { path: "/dashboard/auth", element: <Login/> },
            { path: "/dashboard/UserList", element: <ListUserPage/>},
            { path: "/dashboard/home", element: <HomePage/>},
        ],
    },
]);

export default router;