import { useEffect, useState } from "react";

const ScrollProgressBar = ({scrollRef}) => {
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

        const simpleBarElement = scrollRef?.current?.getScrollElement();

        if (!simpleBarElement) 
            return;

        const handleScroll = () => {
            const scrollTop = simpleBarElement.scrollTop;
            const scrollHeight =
                simpleBarElement.scrollHeight - simpleBarElement.clientHeight;

            const percent = (scrollTop / scrollHeight) * 100;
            setProgress(percent);
        };

        simpleBarElement.addEventListener("scroll", handleScroll);

        return () => simpleBarElement.removeEventListener("scroll", handleScroll);
    }, []);

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