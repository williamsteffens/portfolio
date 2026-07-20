import { useEffect, useState } from "react";

const ScrollProgressBar = ({simpleBar}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // const handleScroll = () => {
        //     const scrollTop = window.scrollY;
        //     const scrollHeight =
        //         document.documentElement.scrollHeight - window.innerHeight;

        //     const percent = (scrollTop / scrollHeight) * 100;

        //     console.log("Scroll progress:", percent);
        //     setProgress(percent);
        // };

        // window.addEventListener("scroll", handleScroll);

        // return () => window.removeEventListener("scroll", handleScroll);

        const scrollElement = simpleBar?.getScrollElement();
         
        if (!scrollElement)
            return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = scrollElement;

            const maxScroll = scrollHeight - clientHeight;

            
            const percent = Math.min(
                100,
                Math.max(0, (scrollTop / maxScroll) * 100)
            );

            setProgress(percent);
        };

        scrollElement.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => scrollElement.removeEventListener("scroll", handleScroll);
    }, [simpleBar]);

    return (
        <div className="fixed top-0 left-0 z-99999 h-1 w-full bg-rust/60 dark:bg-dark-muted transition-colors duration-300">
            <div
                className="h-full bg-rust dark:bg-rust transition-all duration-100"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default ScrollProgressBar;