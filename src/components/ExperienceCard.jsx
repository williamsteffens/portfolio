import { motion, useAnimation } from "framer-motion";

const timelineItem = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            delay: 0.4,
            ease: "easeOut",
        },
    },
};

const ExperienceItem = ({ item }) => {
    const dotControls = useAnimation();
    const cardControls = useAnimation();

    const startAnimation = async () => {
        await cardControls.start("visible");

        await dotControls.start({
            scale: 1,
            transition: {
                duration: 0.4,
                type: "spring",
            },
        });
    };

    return (
        <motion.div
            initial="hidden"
            animate={cardControls}
            variants={timelineItem}
            onViewportEnter={startAnimation}
            className="relative pl-8 pb-10 last:pb-0"
        >
            <motion.span
                initial={{ scale: 0 }}
                animate={dotControls}
                className="
                    absolute -left-1.25 top-1
                    w-3 h-3 rounded-full
                    bg-rust
                    border-2 border-paper
                "
            />

            <p className="font-mono text-2xs tracking-widest2 uppercase text-rust mb-1">
                {item.year}
            </p>

            <h3 className="font-display font-bold text-2xl leading-tight mb-2 text-paper">
                {item.title}
            </h3>

            <p className="text-sm leading-relaxed max-w-[60ch] text-paper/75">
                {item.desc}
            </p>
        </motion.div>
    );
}

export default ExperienceItem;