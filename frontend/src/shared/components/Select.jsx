export default function Select({
    label,
    name,
    error,
    value,
    onChange,
    options = [],
}){
    return(
        <div className="w-[320px]">
        {label && ( 
            <label className="block text-caption mb-1 text-text-secondary place-self-start">
                {label}
            </label>
        )}

        <select 
            name={name} 
            value={value}
            onChange={onChange}
            className={`w-full 
            h-12
            rounded-md
            border
            border-border
            px-4

            hover:border-2
            hover:border-focus-border
            
            ${error ? "border-red-600" : "border border-border"}
            
            `}
            
        >

            <option value="">Seleccione una opcion</option>
            
            {options.map((opt) => (
                
                <option 
                key={opt.value} 
                value={opt.value}
                >
                    {opt.label}
                </option>
            ))}

            </select>
            {error && <p className="text-caption text-red-600 place-self-start">{error}</p>}
        </div>
    )
}