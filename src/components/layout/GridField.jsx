const GridField = () => {
    return (
        <svg 
            className="grid-field pointer-events-none fixed inset-0 w-full h-full" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
        >
            {Array.from({ length: 11 }).map((_, i) => (
                <line key={"v" + i} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="currentColor"/>
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
                <line key={"h" + i} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="currentColor"/>
            ))}
        </svg>
    );
}

export default GridField;