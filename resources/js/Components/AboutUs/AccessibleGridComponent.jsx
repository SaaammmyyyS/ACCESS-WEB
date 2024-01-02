export default function AcccessibleGridComponent({
    className,
    title,
    content,
    isGrid = "w-96"
}){
    return (
        <div className={isGrid}>
            <h1 className=" font-extrabold pb-5 text-2xl text-dark-purple">{title}</h1>

            <p>
                {content}
            </p>
        </div>
    );    
}