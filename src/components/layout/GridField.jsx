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
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: 1,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: i * 0.13
                    }}
                />
            ))}
        </svg>
    );
};

export default GridField;