/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

import Reveal from "./utils/Reveal";

const aboutItems = [
    {
      label: 'Jira Tickets',
      number: 250
    },
    {
      label: 'Years of experience',
      number: 2.5
    },
    {
        "label": "LeetCode Problems",
        "number": 250
    }
  ];

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div 
            className="container "
        >
            <div className=" bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                <Reveal><h4 className="typewriter">Hi, I’m Yogesh!</h4></Reveal>
                <Reveal><h5>I’m a web developer with 2.5+ years of experience in building and optimizing dynamic web applications. Skilled in Angular, TypeScript, and AWS.</h5></Reveal>
                <Reveal><h5>I’m currently expanding my expertise with React and Tailwind CSS to enhance my frontend development capabilities. My focus is on crafting responsive, high-performance web solutions while collaborating with teams to bring innovative ideas to life.</h5></Reveal>
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400 ">{label}</p>

                            </div>
                        ))
                    }
                    <img 
                        src={"/images/Logo.svg"} 
                        alt="Logo"
                        width={60}
                        height={60} 
                        className="ml-auto md:w-[100px] md:h-[100px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
