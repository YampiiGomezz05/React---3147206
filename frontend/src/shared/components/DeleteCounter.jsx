// import { useState } from "react";

// export default function DeleteCounter() {
    
//     const [count, setCount] = useState(0)

//     return(
        
//         <div>
//             <p>Contador: {count}</p>
//             <button onClick={() => setCount(count + 1)} className="border p-[12px]">
//                 Incrementar
//             </button>
//         </div>
//     );
// }

// ====================================================
// Hacer la actividad anterior con una funcion 

export default function DeleteCounter() {
    
    let count = 0;

    const incrementar = () => {
        count = count + 1;
        console.log("Nuevo valor: ", count);
        
    }

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementar} className="border p-[12px]">Incrementar</button>
        </div>
    )
}