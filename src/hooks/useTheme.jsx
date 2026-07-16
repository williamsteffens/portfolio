import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        if (stored) return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);

        const favicon = document.getElementById('favicon');
        if (!favicon) 
            return;
        favicon.href = 
            theme === "dark" 
                ? "/favicon-dark.svg" 
                : "/favicon-light.svg";
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return { theme, toggle };
}
