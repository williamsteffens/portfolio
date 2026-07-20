import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
];

const TopBar = ({ theme, onToggleTheme, simpleBar }) => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const scrollElement = simpleBar ? simpleBar.getScrollElement() : window;

        if (!scrollElement) 
            return;

        const handleScroll = () => {
            const current = scrollElement.scrollTop || window.scrollY;

            if (current > lastScrollY && current > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            setLastScrollY(current);
        }

        scrollElement.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            scrollElement.removeEventListener("scroll", handleScroll);
        };
    }, [simpleBar, lastScrollY]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } 

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
    }, [menuOpen]);

    return (
        <>
            <nav 
                className={`
                    fixed top-0 left-0 right-0 z-50
                    w-full
                    border-b-2 border-ink dark:border-dark-border
                    bg-paper dark:bg-dark-bg
                    transition-transform
                    ${visible ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                <div 
                    className="
                        flex items-center justify-between
                        px-6 md:px-10 py-5
                        max-w-6xl mx-auto
                    "
                >
                    <span className="font-mono text-2xs tracking-widest2 uppercase">
                        Portfolio
                    </span>

                    <div className="hidden sm:flex gap-8 font-mono text-2xs tracking-widest2 uppercase">
                        {NAV_ITEMS.map((label) => (
                            <a
                                key={label}
                                href={`#${label.toLowerCase()}`}
                                className="hover:text-rust transition-colors duration-150"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block">
                            <ThemeToggle
                                theme={theme}
                                onToggle={onToggleTheme}
                            />
                        </div>

                        {/* Burger */}
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            className="
                                sm:hidden
                                flex flex-col gap-1.5
                                p-2
                                -m-2
                                hover:bg-ink/30
                                transition-colors duration-200
                            "
                            aria-label="Open menu"
                        >
                            <span className="w-6 h-0.5 bg-current" />
                            <span className="w-6 h-0.5 bg-current" />
                            <span className="w-6 h-0.5 bg-current" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu */}
            <div
                className={`
                    fixed inset-0 z-40
                    bg-paper dark:bg-dark-bg
                    transition-transform duration-300
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-22 right-6 font-mono text-5xl text-ink leading-none w-12 h-13 bg-red-300 hover:bg-red-400"
                    aria-label="Close menu"
                >
                    ×
                </button>

                <div className="flex flex-col items-center justify-center h-full gap-10">
                    {NAV_ITEMS.map((label) => (
                        <a
                            key={label}
                            href={`#${label.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="font-mono text-3xl uppercase hover:text-rust transition-colors"
                        >
                            {label}
                        </a>
                    ))}

                    <div className="scale-140">
                        <ThemeToggle
                            theme={theme}
                            onToggle={onToggleTheme}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;