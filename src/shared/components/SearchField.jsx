import { forwardRef } from "react";
import { Search, X, LoaderCircle } from "lucide-react";
import clsx from "clsx";

const baseStyles =
        "search flex items-center rounded-xl px-3 transition-all border"

const sizeStyles = {
    sm: "h-9 text-sm",
    md: "h-11 text-sm",
    lg: "h-12 text-base"
};

const variantStyles = {
    filled:
        "bg-neutral-100 border-blue-500 hover:border-blue-700 focus-within:bg-white",
    outlined: "bg-transparent border-green-500 hover:border-green-600",
};

const SearchField = forwardRef(
    (
        {
            value = "",
            placeholder = "Buscar",
            onChange = () => {},
            onSubmit,
            onClear = () => {},
            size = "md",
            variant = 'filled',
            fullWidth = false,
            disabled = false,
            loading = false,
            error = false,
            name = "search",
            arialLabel = "Campo de Busqueda",
            autocomplete = "off",
            icon,
            className,
        },
        ref
    ) => {
        const SearchIcon = icon || Search;

        const handleCLear = () => {
            onChange("");
            onClear();
        };

        const handleSubmit = (e) => {  // ← faltaba >
            e.preventDefault();
            if (disabled || loading) return;
            onSubmit?.(value);
        };

        return (
            <form
            onSubmit={handleSubmit}
            className={clsx(
                baseStyles,
                sizeStyles[size],
                variantStyles[variant],
                fullWidth && "w-full",
                disabled && "opacity-60 pointer-events-none",
                error
                ? "border-red-500 focus-within:right-2 focus-within:ring-red-500"
                : "focus-within:ring-2 focus-within:ring-primary",
                className,
            )}
            >
                {loading ? (
                    <LoaderCircle className="size-4 shirink-0 animmate-spin text-neutral-500"/>
                ) : (
                    <SearchIcon className="size-4 shirink-0 text-neutral-500"/>
                )}

                <input
                ref={ref}
                type="search"
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                aria-label={arialLabel}      // ← aria-label con guión no es JS válido, usar prop
                autoComplete={autocomplete}  // ← autoComplete con C mayúscula y nombre correcto
                onChange={(e) => onChange(e.target.value)}
                className="search__input flex-1 bg-transparent px-2 outline-none"
                />

                {!!value && !disabled && (
                    <button
                    type="button"
                    onClick={handleCLear}
                    aria-label="Limpieza de busqueda"
                    className="searc__clear rounded-full p-1 hover:bg-neutral-200"
                    >
                        <X className="size-4 text-neutral-500"/>
                    </button>
                )}
            </form>
        );
    }
)

SearchField.displayName = "SearchField"
export default SearchField;