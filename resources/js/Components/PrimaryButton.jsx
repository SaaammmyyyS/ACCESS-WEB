export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-16 py-4 bg-pink rounded-full text-md text-white uppercase focus:outline-none transition-width duration-500 ease-in-out hover:tracking-widest ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}