import { useState, useMemo } from "react";

function App() {
    const [numero, setNumero] = useState(1);

  // 🔥 cálculo "pesado" ⚓
    const resultado = useMemo(() => {     // useMemo vigila a numero para ver si cambia y si cambia vuelve y hace el calculo
        console.log("Haciendo el cálculo...");
            return numero * 1000;
    }, [numero]);

    return (
        <div>
            <h2>Ejemplo useMemo</h2>

        <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(Number(e.target.value))}
        />

        <h3>Resultado: {resultado}</h3>
        </div>
    );
}

export default App;

// import { useState } from "react";

// function App() {
//   const [numero, setNumero] = useState();

//   // 🔥 cálculo "pesado" (sin optimización)
//   console.log("Haciendo el cálculo...");
//   const resultado = numero * 1000;

//   return (
//     <div>
//       <h2>Ejemplo SIN useMemo</h2>

//       <input
//         type="number"
//         value={numero}
//         onChange={(e) => setNumero(Number(e.target.value))}
//       />

//       <h3>Resultado: {resultado}</h3>
//     </div>
//   );
// }

// export default App;

// import { useState, useMemo } from "react";

// function App() {
//     const [busqueda, setBusqueda] = useState("");

//     const posts = [
//         { id: 1, texto: "foto en la playa" },
//         { id: 2, texto: "comiendo pizza" },
//         { id: 3, texto: "entrenando en el gym" },
//         { id: 4, texto: "viaje a medellin" },
//     ];

//   // 🔥 usamos useMemo para no filtrar siempre
//     const postsFiltrados = useMemo(() => {
//         console.log("Filtrando...");
//             return posts.filter((post) =>
//                 post.texto.toLowerCase().includes(busqueda.toLowerCase())
//             );
//     }, [busqueda]);

//     return (
//         <div>
//             <h2>Buscar en publicaciones</h2>

//         <input
//             type="text"
//             placeholder="Buscar..."
//             value={busqueda}
//             onChange={(e) => setBusqueda(e.target.value)}
//         />

//             <h3>Resultados:</h3>

//         {postsFiltrados.map((post) => (
//             <p key={post.id}>{post.texto}</p>
//             ))}
//         </div>
//     );
// }

// export default App;

// 🧓 Explicación modo abuelo

// “Mire mijo… yo tengo muchas fotos guardadas 😴
// y usted me pide que le busque una palabra…
// yo las reviso todas y le muestro las que coinciden.”

// 👉 Pero luego el abuelo dice:

// “Pero tampoco me ponga a revisar TODAS las fotos otra vez
// si usted no cambió lo que está buscando 😤”