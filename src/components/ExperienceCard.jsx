import { motion } from "framer-motion";

const timelineItem = {
    hidden: {
        opacity: 0,
        x: 50,
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

const ExperienceItem = ({ item }) => {
    return (
        <motion.div
            variants={timelineItem}
            className="relative pl-8 pb-10 last:pb-0"
        >
            <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    type: "spring",
                }}
                className="
                    absolute -left-1.25 top-1
                    w-3 h-3 rounded-full
                    bg-rust
                    border-2 border-dark-border dark:border-paper
                "
            />

            <p className="font-mono text-2xs tracking-widest2 uppercase text-rust mb-1">
                {item.year}
            </p>

            <h3 className="font-display font-bold text-2xl leading-tight mb-2 text-ink dark:text-paper">
                {item.title}
            </h3>

            <p className="text-sm leading-relaxed max-w-[60ch] text-ink/75 dark:text-paper/75">
                {item.desc}
            </p>
        </motion.div>
    );
};

export default ExperienceItem;