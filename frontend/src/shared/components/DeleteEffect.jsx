// import { useEffect, useState } from "react"

// export default function DeleteEffect() {

//     const [message, setMessage] = useState("Cargando...")

//     useEffect(() => {

//         setTimeout(() => {
//             setMessage("Componente cargado")
//         }, 2000);

//     }, [])

//     return <h1>{message}</h1>
    
// }
// ============================================================================================================
// Segunda actividad

import { useEffect, useState } from "react"

export default function DeleteEffect() {

    console.log("Render")

    const [message, setMessage] = useState("Cargando...")

    useEffect(() => {
        
        console.log("Efecto ejecutado");
        
        setTimeout(() => {
            setMessage("Componente cargado")
        }, 2000);

    }, [])

    return <h1>{message}</h1>

}