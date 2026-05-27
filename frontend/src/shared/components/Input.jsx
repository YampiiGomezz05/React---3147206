export default function Input({
    label,
    type = "text",
    error,
    ...props
}){
    //Cuerpo de la funcion --- Todas las funciones va a retornar un solo Div
    return (
        // Contenedor del input que se exporta con label, cuerpo y feedback message 

        <div className="w-full">
            {/* Label */}

            {label && (
                <label
                className={
                    `block
                    text-[8px]
                    mb-1
                    place-self-start
                    ${error ? "text-red-600" : "text-text-primary"}
                `}>
                {label}
            </label>
            )} 

            {/* ========================================================== */}

            {/* Contenedor del input */}
            <div
            className="
                relative
                h-12
                flex
                text-text-secondary
                items-center
            ">

                {/* Area interactiva invisible de un input 48px */}

                <div 
                    className="
                        absolute
                        inset-0
                    "
                    onMouseDown={(e) => {
                        e.preventDefault();
                        // Mueve el foco al siguiente elemento hermano del elemento actual.
                        // 'currentTarget' referencia el elemento  que tiene el handler del evento.
                        // 'nextSibling' obtiene el siguiente nodo en el DOM (puede ser un input u otro elemento).
                        // 'focus()' cambia el foco del usuario hacia ese elemento.
                        e.currentTarget.nextSibling.focus();
                    }}
                    />

                

                {/* Area visual del input */}

                <input
                    type={type}
                    className={` 
                        relative
                        w-full
                        h-12
                        rounded-md
                        border
                        border-border
                        px-4
                        text-base

                        hover:border-2
                        hover:border-focus-border
                        
                        focus:outline-none
                        focus:ring-1
                        focus:ring-focus-ring
                    
                        ${error ? "border-red-600" : "border border-border"}
                    `}
                    {...props}
                />
            </div>

            {/* Feedback message */}
            {error && <p className="text-caption text-red-600 place-self-start">{error}</p>}
            <div>

            </div>

        </div>
    )

};