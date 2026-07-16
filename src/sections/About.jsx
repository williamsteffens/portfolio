import Eyebrow from "../components/layout/Eyebrow";

const About = () => {
    const meta = [
        { k: "BASED", v: 'Copenhagen' },
        { k: "STUDYING AT", v: 'AAU' },
        { k: "FOCUS", v: 'Fullstack' },
        { k: "AVAILABLE", v: "Open to opportunities" },
    ];

    return (
        <section id="about" className="section-rule relative z-1 px-6 md:px-10 py-16 md:py-20">
            <Eyebrow>WHOAMI</Eyebrow>

            <h2 className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-8 text-ink dark:text-paper">
                ABOUT
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">
                <div className="text-[17px] leading-[1.75] max-w-[54ch] space-y-4 text-ink dark:text-paper/90">
                    <p>
                        I've always enjoyed learning a little bit of everything. Whether it's building web applications, designing APIs, brewing beer and mead, climbing boulders, or exploring underwater, I'm happiest when I'm picking up new skills and figuring out how things work.
                    </p>
                    <p>
                        That curiosity led me to earn my BSc in Software Technology from DTU and continues to drive how I approach software development. While backend development is where I feel most at home, I enjoy understanding the whole system and collaborating across the stack to build reliable, maintainable software.
                    </p>
                </div>

                <dl className="font-mono text-xs self-start mt-1">
                    {meta.map(({ k, v }) => (
                        <div key={k} className="meta-row">
                            <dt className="text-line dark:text-dark-muted">{k}</dt>
                            <dd className="text-right">{v}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default About;