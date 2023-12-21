import { FaLongArrowAltRight } from "react-icons/fa";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    arrow = true,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-16 py-4 group bg-pink border border-transparent rounded-full text-md text-white uppercase transition-width duration-500 ease-in-out hover:tracking-widest hover:font-bold ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}

            {arrow && (
                <FaLongArrowAltRight className="hidden ml-2 group-hover:inline" />
            )}
        </button>
    );
}
