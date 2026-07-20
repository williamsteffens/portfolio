import { motion } from "framer-motion";
import Eyebrow from "../components/layout/Eyebrow";

const About = () => {
    const meta = [
        { k: "BASED", v: "Copenhagen" },
        { k: "STUDYING AT", v: "AAU" },
        { k: "FOCUS", v: "Fullstack" },
        { k: "AVAILABLE", v: "Open to opportunities" },
    ];

    const reveal = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const metaContainer = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15,
            },
        },
    };

    const metaItem = {
        hidden: {
            opacity: 0,
            x: 40,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="about"
            className="relative z-1 px-6 md:px-10 py-16 md:py-20"
        >
            <Eyebrow>WHOAMI</Eyebrow>
            
            <motion.h2
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
                className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-8 text-ink dark:text-paper"
            >
                ABOUT
            </motion.h2>


            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">

                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-[17px] leading-[1.75] max-w-[54ch] space-y-4 text-ink dark:text-paper/90"
                >
                    <p>
                        I've always enjoyed learning a little bit of everything.
                        Whether it's building web applications, designing APIs,
                        brewing beer and mead, climbing boulders, or exploring
                        underwater, I'm happiest when I'm picking up new skills
                        and figuring out how things work.
                    </p>

                    <p>
                        That curiosity led me to earn my BSc in Software Technology
                        from DTU and continues to drive how I approach software
                        development. While backend development is where I feel most
                        at home, I enjoy understanding the whole system and
                        collaborating across the stack to build reliable,
                        maintainable software.
                    </p>
                </motion.div>

                <motion.dl
                    variants={metaContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="font-mono text-xs self-start mt-1"
                >
                    {meta.map(({ k, v }) => (
                        <motion.div
                            key={k}
                            variants={metaItem}
                            className="meta-row"
                        >
                            <dt className="text-line dark:text-dark-muted">
                                {k}
                            </dt>

                            <dd className="text-right">
                                {v}
                            </dd>
                        </motion.div>
                    ))}
                </motion.dl>

            </div>
        </section>
    );
};

export default About;