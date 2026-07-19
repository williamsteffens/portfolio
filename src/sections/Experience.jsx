import Eyebrow from "../components/layout/Eyebrow";

const experience = [
    {
        year: "2022",
        title: "Student Software Engineer – Continia", 
        desc: "Developed and maintained features for document capture solutions. \
            Collaborated with cross - functional teams to deliver new functionality and improvements. \
            Contributed to bug fixes, testing, and code reviews in an agile development environment." 
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="
        relative z-1 px-6 md:px-10 py-16 md:py-20
        bg-ink dark:bg-black text-paper
        transition-colors duration-300"
        >
            <Eyebrow>SO FAR</Eyebrow>

            <h2 className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-10 text-paper">
                EXPERIENCE
            </h2>

            {/* Timeline */}
            <div className="ml-2 border-l-[1.5px] border-dashed border-paper/25">
                {experience.map((item, i) => (
                    <div key={item.year} className="relative pl-8 pb-10 last:pb-0">
                        {/* Trail dot */}
                        <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-rust border-2 border-paper" />

                        <p className="font-mono text-2xs tracking-widest2 uppercase text-rust mb-1">
                            {item.year}
                        </p>
                        <h3 className="font-display font-bold text-2xl leading-tight mb-2 text-paper">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed max-w-[60ch] text-paper/75">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
