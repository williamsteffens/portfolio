import Eyebrow from "../components/layout/Eyebrow";

const links = [
    { label: "Email", href: `mailto:${'william.f.f.steffens@gmail.com'}`, value: 'william.f.f.steffens@gmail.com' },
    { label: "GitHub", href: `https://github.com/${'williamsteffens'}`, value: 'williamsteffens' },
    { label: "LinkedIn", href: `https://linkedin.com/in/${'williamffsteffens'}`, value: 'williamffsteffens' },
    { label: "Resume", href: "/william_steffens_cv.pdf", value: "DOWNLOAD ↓"},
];

const Contact = () => {
    return (
        <section id="contact" className="relative z-1 px-6 md:px-10 py-16 md:py-20">
            <Eyebrow>Contact</Eyebrow>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
                <h2 className="font-display font-black text-[clamp(40px,7vw,100px)] leading-[0.9] text-ink dark:text-paper">
                    LET'S<br />CONNECT!
                </h2>

                <nav aria-label="Contact links">
                    <ul className="flex flex-col gap-0">
                        {links.map(({ label, href, value }) => (
                            <li key={label}>
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
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Contact;