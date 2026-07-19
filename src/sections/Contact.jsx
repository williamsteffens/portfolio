import { motion } from "framer-motion";
import Eyebrow from "../components/layout/Eyebrow";

const links = [
    { label: "Email", href: `mailto:${'william.f.f.steffens@gmail.com'}`, value: 'william.f.f.steffens@gmail.com' },
    { label: "GitHub", href: `https://github.com/${'williamsteffens'}`, value: 'williamsteffens' },
    { label: "LinkedIn", href: `https://linkedin.com/in/${'williamffsteffens'}`, value: 'williamffsteffens' },
    { label: "Resume", href: "/william_steffens_cv.pdf", value: "DOWNLOAD ↓"},
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

const list = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.15,
        },
    },
};

const item = {
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

const Contact = () => {
    return (
        <section 
            id="contact" 
            className="relative z-1 px-6 md:px-10 py-16 md:py-20"
        >
            <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Eyebrow>Contact</Eyebrow>
            </motion.div>

<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
                <motion.h2
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.1 }}
                    className="font-display font-black text-[clamp(40px,7vw,100px)] leading-[0.9] text-ink dark:text-paper"
                >
                    LET&apos;S
                    <br />
                    CONNECT!
                </motion.h2>

                <motion.nav
                    aria-label="Contact links"
                    variants={list}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ul className="flex flex-col">
                        {links.map(({ label, href, value }) => (
                            <motion.li key={label} variants={item}>
                                <a
                                    href={href}
                                    download={label === "Resume"}
                                    className="
                                        flex justify-between items-center
                                        font-mono text-[13px] py-3
                                        border-b border-dashed border-line dark:border-dark-border
                                        text-ink dark:text-paper
                                        hover:text-rust dark:hover:text-rust
                                        hover:border-rust dark:hover:border-rust
                                        transition-colors duration-150
                                        group
                                    "
                                >
                                    <span className="uppercase tracking-widest2 text-2xs text-line dark:text-dark-muted group-hover:text-rust dark:group-hover:text-rust transition-colors">
                                        {label}
                                    </span>

                                    <span>{value}</span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            </div>
        </section>
    );
}

export default Contact;