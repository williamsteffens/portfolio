import { motion } from "framer-motion";

const Hero = () => {
    return (
        <header className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-10 relative z-10">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-8"
            >
                <span className="w-2 h-2 bg-rust rounded-full animate-pulse" />
                Available for opportunities
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-body uppercase font-black leading-[0.8] text-[clamp(56px,11vw,170px)]"
            >
                William<br />
                <span className="text-rust">Steffens</span>
            </motion.h1>

            <div className="relative mt-10 pt-8">
                {/* Animated divider line */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-ink origin-left"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="grid md:grid-cols-[1fr_380px] gap-10"
                >
                    <div>
                        <p className="text-xl md:text-2xl leading-snug max-w-3xl font-medium">
                            Software engineer building reliable systems and thoughtful
                            digital experiences.
                        </p>

                        <p className="text-sm leading-relaxed max-w-xl mt-6">
                            Driven software engineer with a passion for building reliable systems. My experience with various programming languages and 
                            paradigms has allowed me to develop scalable solutions, seamless API integrations and maintainable software that solves real-world
                            problems. As a colleague, I am responsible, disciplined and team-oriented. I enjoy tackling complex challenges, learning new
                            technologies and continuously improving the quality and performance of the systems I build.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-ink text-paper p-5 font-mono text-xs h-fit"
                    >
                        <div className="flex justify-between text-paper/50 mb-5">
                            <span>profile</span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-paper/50">EDUCATION</p>
                                <p className="mt-1">MSc Software @ AAU</p>
                            </div>

                            <div>
                                <p className="text-paper/50">FOCUS</p>
                                <p className="mt-1">
                                    Backend · APIs · Cloud
                                </p>
                            </div>

                            <div>
                                <p className="text-paper/50">OPEN TO</p>
                                <p className="mt-1">
                                    Student positions / Full-Stack / Backend
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;