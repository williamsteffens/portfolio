import { motion } from "framer-motion";
import Eyebrow from "../components/layout/Eyebrow";

const skills = [
    {
        key: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    },
    {
        key: "Frameworks",
        items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
        key: "Databases",
        items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
        key: "Tools & Platforms",
        items: ["Git", "Docker", "AWS", "Vercel", "Netlify"],
    },
];

const cardContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.75,
            staggerChildren: 0.2,
        },
    },
};

const cardItem = {
    hidden: {
        opacity: 0,
        scale: 0.85,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                relative z-1 px-6 md:px-10 py-16 md:py-20
                bg-paper-dark dark:bg-dark-surface
                transition-colors duration-300
            "
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Eyebrow>Capabilities</Eyebrow>
            </motion.div>


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-8 text-ink dark:text-paper"
            >
                SKILLS
            </motion.h2>


            <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 lg:grid-cols-4"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.key}
                        variants={cardItem}
                        className="
                            p-6 flex flex-col min-h-45
                            bg-paper-dark dark:bg-dark-surface
                            transition-colors duration-300
                            border-2 border-ink dark:border-dark-border
                            -ml-0.5 -mt-0.5
                            hover:bg-amber-100/50 dark:hover:bg-amber-100/10
                        "
                    >
                        <span className="font-mono text-2xs tracking-widest2 uppercase text-rust mb-4">
                            {skill.key}
                        </span>

                        <ul className="space-y-0.5">
                            {skill.items.map((item) => (
                                <li
                                    key={item}
                                    className="text-sm leading text-ink dark:text-paper/85"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}