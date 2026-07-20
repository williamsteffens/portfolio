import { motion } from "framer-motion";
import Eyebrow from "../components/layout/Eyebrow";
import CropMarks from "../components/layout/CropMarks";
import projects from "../data/projects.json";
import GithubIcon from "../assets/github-svgrepo-com.svg?react";
import ExternalIcon from "../assets/external-link-svgrepo-com.svg?react";

const projectContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15,
        },
    },
};

const projectCard = {
    hidden: {
        opacity: 0,
        x: -60,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const chipContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const chip = {
    hidden: {
        opacity: 0,
        x: 20,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative z-1 px-6 md:px-10 py-16 md:py-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Eyebrow>SELECTED WORK</Eyebrow>
            </motion.div>


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-8 text-ink dark:text-paper"
            >
                PROJECTS
            </motion.h2>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="leading-relaxed max-w-3xl mb-8"
            >
                These are a few selected projects. For the full archive, including smaller
                experiments and ongoing work, visit <a
                    href="https://github.com/williamsteffens"
                    className="font-bold text-rust hover:text-rust/80 transition-colors"
                >
                    my GitHub
                </a>.
            </motion.div>


            <motion.div
                variants={projectContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="flex flex-col gap-6"
            >
                {projects.map((p) => (
                    <motion.article
                        key={p.id}
                        variants={projectCard}
                        className="
                            relative border-[1.5px] border-ink dark:border-dark-border p-7
                            grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6
                            bg-paper dark:bg-dark-surface
                            transition-colors duration-300
                        "
                    >
                        <CropMarks />

                        {/* ID + coord */}
                        <div className="flex flex-row md:flex-col gap-4 md:gap-0">
                            <span className="font-display font-black text-5xl leading-none text-rust">
                                {p.id}
                            </span>

                            <span className="font-mono text-[9px] leading-relaxed tracking-tight text-ink dark:text-paper/60 self-end md:mt-2">
                                {p.code}
                            </span>
                        </div>

                        {/* Main content */}
                        <div>
                            <h3 className="font-display font-bold text-3xl leading-none mb-1 text-ink dark:text-paper">
                                {p.title}
                            </h3>

                            <p className="font-mono text-2xs tracking-widest2 uppercase text-rust mb-4">
                                {p.tag}
                            </p>

                            <p className="text-[14.5px] leading-relaxed max-w-[60ch] text-ink dark:text-paper/80">
                                {p.desc}
                            </p>

                            {p.links && (
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {p.links.demo && (
                                        <a
                                            href={p.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-rust hover:text-rust/80 transition-colors"
                                        >
                                            <ExternalIcon className="w-5 h-5 text-ink dark:text-paper overflow-visible" />
                                            Live Demo
                                        </a>
                                    )}

                                    {p.links.github && (
                                        <a
                                            href={p.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-rust hover:text-rust/80 transition-colors"
                                        >
                                            <GithubIcon className="w-5 h-5 text-ink dark:text-paper overflow-visible" />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                        
                        {/* Stack chips */}

                        <motion.div
                            variants={chipContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap md:flex-col gap-2 content-start justify-start md:justify-end items-start"
                        >
                            {p.stack.map((t) => (
                                <motion.span
                                    key={t}
                                    variants={chip}
                                    className="
                                        font-mono text-[10.5px] border border-ink dark:border-dark-border
                                        px-2.5 py-1 text-ink dark:text-paper whitespace-nowrap
                                    "
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </motion.div>

                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}