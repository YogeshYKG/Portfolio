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

/** Parallax in Header and Hero */
import { Parallax } from "react-parallax";
import imgparallex2 from "../public/images/ParallaxImg/img2.jpg";
import imgparallex8 from "../public/images/ParallaxImg/img8.jpg";
import imgparallex10 from "../public/images/ParallaxImg/img10.jpg";
import imgparallex12 from "../public/images/ParallaxImg/img12.jpg";
import imgparallex17 from "../public/images/ParallaxImg/img17.png";
import imgparallex18 from "../public/images/ParallaxImg/img18.png";
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
            <Parallax 
                bgImage={imgparallex10} 
                strength={300} 
                style={{ position: "relative", width: "100%", minHeight: "100%" }} // Set a min-height and relative position
            >
            <div style={{ position: "relative" }}>
            <Header />
            <Hero />
            </div>
            </Parallax>
            <main>
            <Parallax 
                bgImage={imgparallex12} 
                strength={200} 
                style={{ position: "relative", width: "100%", minHeight: "100%" }} // Set a min-height and relative position
            >
            <div style={{ position: "relative" }}>
                <About />
                <Skills />
            </div>
            </Parallax>
            <Parallax 
                bgImage={imgparallex2} 
                strength={-200} 
                blur={{ min: -10, max: 10 }}
                style={{ position: "relative", width: "100%", minHeight: "100%" }} // Set a min-height and relative position
            >
            <div style={{ position: "relative" }}>
                <MyApps />
            </div>
            </Parallax>
            <Parallax 
                bgImage={imgparallex8} 
                strength={300} 
                blur={{ min: 15, max: -15 }}
                style={{ position: "relative", width: "100%", minHeight: "100%" }} // Set a min-height and relative position
            >
            <div style={{ position: "relative" }}>
                <Work />
            </div>
            </Parallax>
            <Parallax 
                bgImage={imgparallex17} 
                strength={200} 
                blur={{ min: -15, max: 5 }}
                style={{ position: "relative", width: "100%", minHeight: "100%" }} // Set a min-height and relative position
            >
            <div style={{ position: "relative" }}>
                <Review />
                <Contact />
            </div>
            </Parallax>
            </main>
            <Parallax 
                bgImage={imgparallex18} 
                strength={200} 
                blur={{ min: -15, max: 5 }}
                style={{ position: "relative", width: "100%", minHeight: "100%" }} // Set a min-height and relative position
            >
            <div style={{ position: "relative" }}>
            <Footer />
            </div>
            </Parallax>
            
        </ReactLenis>
    )
}

export default App;