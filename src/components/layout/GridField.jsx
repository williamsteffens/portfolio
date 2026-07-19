import { motion } from "framer-motion";

const GridField = () => {
    const lines = [
        ...Array.from({ length: 11 }).map((_, i) => ({
            type: "v",
            x1: i * 10,
            y1: 0,
            x2: i * 10,
            y2: 100,
        })),
        ...Array.from({ length: 11 }).map((_, i) => ({
            type: "h",
            x1: 0,
            y1: i * 10,
            x2: 100,
            y2: i * 10,
        })),
    ];

    return (
        <svg
            className="grid-field pointer-events-none fixed inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            {lines.map((line, i) => (
                <motion.line
                    key={line.type + i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="currentColor"
                    initial={{
                        opacity: 0,
                        pathLength: 0,
                    }}
                    animate={{
                        opacity: 1,
                        pathLength: 1,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: line.type === "v"
                            ? i * 0.05
                            : 0.6 + i * 0.05,
                    }}
                />
            ))}
        </svg>
    );
};

export default GridField;