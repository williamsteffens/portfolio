import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
// could use onviewportenter

const Loader = () => {
    const redactionLine = useAnimation();
    const name = useAnimation();

    const ease = [0.8, 0, 0.3, 1];
    const duration = 0.4;

    useEffect(() => {
        const startAnimation = async () => {
            // Line enters from the left and covers text area
            await redactionLine.start({
                width: "100%",
                x: "0%",
                transition: {
                    duration: duration,
                    ease: ease,
                },
            });

            // Name appears underneath the line
            await name.start({
                opacity: 1,
            });

            // Line fucks off to the right
            await redactionLine.start({
                x: "100%",
                transition: {
                    duration: duration,
                    ease: ease,
                },
            });

            await new Promise((resolve) => setTimeout(resolve, 600));

            // Reset line to the left instantly
            await redactionLine.set({
                x: "0%",
                width: "0",
            });

            // Line returns from the left and covers text area again
            await redactionLine.start({
                width: "100%",
                transition: {
                    duration: duration,
                    ease: ease,
                },
            });

            // Name disappears
            await name.start({
                opacity: 0,
            });

            // Line fucks off to the right again
            await redactionLine.start({
                x: "100%",
                transition: {
                    duration: duration,
                    ease: ease,
                },
            });
        };

        startAnimation();
    }, [redactionLine, name]); // i think this is wrong

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
                fixed inset-0 z-50 bg-transparent
                flex items-center justify-center
                select-none pointer-events-none
            "
        >
            <div className="relative overflow-hidden">
                {/* Redaction line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={redactionLine}
                    className="
                        absolute
                        left-0
                        top-0
                        h-full
                        bg-ink
                        dark:bg-paper
                    "
                />

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={name}
                    className="
                        font-mono uppercase tracking-widest 
                        text-[clamp(56px,11vw,170px)]
                        leading-none
                    "
                >
                    William<br />
                    Steffens
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;