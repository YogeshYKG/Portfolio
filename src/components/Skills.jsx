/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/** Component */
import SkillCard from "./SkillCard";
import Reveal from "./utils/Reveal";

const skillItem = [
    {
      imgSrc: '/images/Icons/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/Icons/CSS.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/Icons/javaScript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/Icons/nodeJs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/Icons/ExpressJs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/Icons/MongoDB.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/Icons/React.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/Icons/TailwindCSS.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/Icons/CSS.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/Icons/GitHub.svg',
      label: 'GitHub',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/Icons/Jira.svg',
      label: 'Jira',
      desc: 'Project Management'
    },
    {
      imgSrc: '/images/Icons/VSCode.svg',
      label: 'VS Code',
      desc: 'IDE'
    },
    {
      imgSrc: '/images/Icons/AWS.svg',
      label: 'AWS',
      desc: 'Cloud Services'
    }
  ];
  

const Skills = () => {
  return (
    <section 
      id="Skills"
      className="section"
    >
        <div className="container mx-auto py-12">

            <Reveal>
            <h2 className="headline-2 reveal-up ">
                Essential Tools I use
            </h2>
            </Reveal>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                <Reveal>
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </Reveal>
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                    <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes="reveal-up"
                    />
                    ))
                }
            </div>



        </div>
    </section>
  )
}

export default Skills
