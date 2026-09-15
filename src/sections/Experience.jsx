import { motion } from "framer-motion";
import Eyebrow from "../components/layout/Eyebrow";
import ExperienceItem from "../components/ExperienceCard";

const experience = [
    {
        year: "2026",
        title: "Volunteer @ Coding Pirates",
        desc: "Volunteer at Coding Pirates hosted by Microsoft Lyngby, introducing children and young people \
        to programming and computational thinking \
        through hands-on projects. Helping participants develop problem-solving skills, \
        explore technology, and build confidence in coding." ,
    },
    {
        year: "2022",
        title: "Software Engineer @ Continia Software",
        desc: "I have contributed to the development of Continia’s automatic OCR-based invoice system. As part of an agile cross-functional team, \
            I have been involved in the entire iterative delivery process of designing new features, implementing, reviewing, writing automated tests, \
            debugging and maintaining production systems."
    },
    {
        year: "2021",
        title: "Student Assistant @ DTU",
        desc: "I was fully responsible for maintaining the university website. I developed and integrated new features while resolving technical issues to ensure a stable platform."
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

const timelineVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const Experience = () => {
    return (
        <section
            id="experience"
            className="
                relative z-1 px-6 md:px-10 py-16 md:py-20
                bg-paper-dark dark:bg-black text-ink dark:text-paper
                transition-colors duration-300
            "
        >
            <Eyebrow>SO FAR</Eyebrow>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-10 "
            >
                EXPERIENCE
            </motion.h2>


            <motion.div
                className="ml-2 relative"
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
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
                        border-ink dark:border-paper/33
                        origin-top
                    "
                />

                {experience.map((item) => (
                    <ExperienceItem key={item.year} item={item} />
                ))}
            </motion.div>
        </section>
    );
}

export default Experience;