import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useTheme from "./hooks/useTheme";
import Layout from "./components/layout/SimpleBar";
import GridField from "./components/layout/GridField";
import TopBar from './components/TopBar';
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Loader from "./components/Loader";

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { theme, toggle } = useTheme();
    const [simpleBar, setSimpleBar] = useState(null);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const finishLoading = () => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2800);
        };

        if (document.readyState === "complete") {
            finishLoading();
        } else {
            window.addEventListener("load", finishLoading);

            return () => {
                window.removeEventListener("load", finishLoading);
            };
        }
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && <Loader />}
            </AnimatePresence>

            <Layout setSimpleBar={setSimpleBar}>
                <GridField />
                {!isLoading && (
                    <>
                        <TopBar theme={theme} onToggleTheme={toggle} />
                        <ScrollProgressBar simpleBar={simpleBar} />

                        <main>
                            <Hero />
                            <About />
                            <Skills />
                            <Projects />
                            <Experience />
                            <Contact />
                        </main>

                        <Footer />
                    </>
                )}
            </Layout>
        </>
    )
}

export default Portfolio