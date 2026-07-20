import { motion } from "framer-motion";
import Eyebrow from "../components/layout/Eyebrow";
import ExperienceItem from "../components/ExperienceCard";

const experience = [
    {
        year: "2022",
        title: "Student Software Engineer – Continia",
        desc: "Developed and maintained features for document capture solutions. \
            Collaborated with cross-functional teams to deliver new functionality and improvements. \
            Contributed to bug fixes, testing, and code reviews in an agile development environment." 
    },
];

const timelineLine = {
    hidden: {
        scaleY: 0,
    },
    visible: {
        scaleY: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const Experience = () => {
    return (
        <section
            id="experience"
            className="
                relative z-1 px-6 md:px-10 py-16 md:py-20
                bg-ink dark:bg-black text-paper
                transition-colors duration-300
            "
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Eyebrow>SO FAR</Eyebrow>
            </motion.div>


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-10 text-paper"
            >
                EXPERIENCE
            </motion.h2>


            <div className="ml-2 relative">

                {/* Animated timeline */}
                <motion.div
                    variants={timelineLine}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="
                        absolute left-0 top-0 bottom-0
                        border-l-[1.5px]
                        border-dashed
                        border-paper/25
                        origin-top
                    "
                />

                {experience.map((item) => (
                    <ExperienceItem key={item.year} item={item} />
                ))}
            </div>
        </section>
    );
}

export default Experience;