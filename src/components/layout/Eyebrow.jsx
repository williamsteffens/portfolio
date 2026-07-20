import { motion } from "framer-motion";

const reveal = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const Eyebrow = ({ children, variant }) => {
  return (
    <motion.div
        variants={variant ?? reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
            flex items-center gap-3.5 mb-8 font-mono text-2xs
            tracking-widest2 uppercase text-rust font-semibold
        ">
            <span className="block w-8 h-px bg-rust shrink-0" />
            {children}
    </motion.div>
  );
}

export default Eyebrow;
