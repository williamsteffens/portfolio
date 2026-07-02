import ThemeToggle from "./ThemeToggle";

export default function TopBar({ theme, onToggleTheme }) {
  return (
    <nav className="
      relative z-10
      flex items-center justify-between
      px-6 md:px-10 py-5
      border-b-2 border-ink dark:border-dark-border
      bg-paper dark:bg-dark-bg
      transition-colors duration-300
    ">
      <span className="font-mono text-2xs tracking-widest2 uppercase">
        Portfolio
      </span>

      <div className="hidden sm:flex gap-8 font-mono text-2xs tracking-widest2 uppercase">
        {["About", "Skills", "Projects", "Experience", "Contact"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="hover:text-rust transition-colors duration-150"
          >
            {label}
          </a>
        ))}
      </div>

      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </nav>
  );
}
