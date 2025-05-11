/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/** Imports */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyApps from "./components/MyApps";
/** App Component */

const App = () => {
    useGSAP(()=>{
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((elements) => {
            gsap.to(elements, {
                scrollTrigger: {
                    trigger: elements,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        });
    });

    return (
        // <RouterProvider router={router}/>
        <ReactLenis root>
            <div style={{ position: "relative" }}>
            <Header />
            <Hero />
            </div>
            <main>
            <div style={{ position: "relative" }}>
                <About />
                <Skills />
            </div>
            <div style={{ position: "relative" }}>
                <MyApps />
            </div>
            <div style={{ position: "relative" }}>
                <Work />
            </div>
            <div style={{ position: "relative" }}>
                <Review />
                <Contact />
            </div>
            </main>
            <div style={{ position: "relative" }}>
            <Footer />
            </div>
            
        </ReactLenis>
    )
}

export default App;