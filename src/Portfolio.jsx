import { useRef } from "react";
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
import ScrollProgressBar from "./components/ProgressBar";

const Portfolio = () => {
    const { theme, toggle } = useTheme();
    const layoutRef = useRef(null);

    return (
        <>
            <ScrollProgressBar scrollRef={layoutRef} />
            <Layout ref={layoutRef}>
                <GridField />
                <TopBar theme={theme} onToggleTheme={toggle} />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                </main>

                <Footer /> 
            </Layout>
        </>
    )
}

export default Portfolio