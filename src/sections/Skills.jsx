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
      <Eyebrow>Capabilities</Eyebrow>

      <h2 className="font-display font-extrabold text-[clamp(34px,5vw,64px)] leading-[0.95] mb-8 text-ink dark:text-paper">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 border border-ink dark:border-dark-border divide-x-2 divide-ink dark:divide-dark-border">
        {skills.map((skill) => (
          <div
            key={skill.key}
            className="
              p-6 flex flex-col justify-between min-h-45
              border-t-2 border-ink dark:border-dark-border
              first:border-t-2
              bg-paper-dark dark:bg-dark-surface
              transition-colors duration-300
            "
          >
            <span className="font-mono text-2xs tracking-widest2 uppercase text-rust mb-4">
              {skill.key}
            </span>
            <ul className="space-y-0.5">
              {skill.items.map((item) => (
                <li key={item} className="text-sm leading-loose text-ink dark:text-paper/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
