export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="
        font-mono text-2xs tracking-widest2 uppercase
        border border-current px-3 py-1.5
        hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink
        transition-colors duration-200
        focus-visible:outline focus-visible:outline-rust
        cursor-pointer
        w-22
      "
    >
      {theme === "dark" ? "☀ LIGHT" : "◑ DARK"}
    </button>
  );
}
