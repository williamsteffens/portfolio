import { useEffect, useState } from "react";

/**
 * Footer
 * Mono strip — copyright, scroll counter, build info.
 * The live scroll value echoes the coordinate readouts used throughout.
 */
export default function Footer() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => setScroll(Math.round(window.scrollY));
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <footer className="
      relative z-1
      flex justify-center items-center
      px-6 md:px-10 py-4
      border-t-2 border-ink dark:border-dark-border
      font-mono text-[10.5px] tracking-widest2 uppercase
      text-rust
      bg-paper dark:bg-dark-bg
      transition-colors duration-300
    ">
            <span>© {new Date().getFullYear()} William Steffens</span>
            {/* <span>SCROLL {String(scroll).padStart(4, "0")}</span>
            <span>BUILT WITH REACT</span> */}
        </footer>
    );
}
