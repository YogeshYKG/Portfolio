/**
 * @copyright 2024 codewithgyogesh
 * @license Apache-2.0
 */

/** Components */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/Works/VDB.gif',
      title: 'VDB Marketplace',
      tags: ['WebDev','Responsive Designs', 'Angular', 'Jewelry Creator', 'SPA', '3D Ring Configurator', 'Dynamic Forms',  'Jewelry Share',],
      projectLink: 'https://vdbapp.com/'
    },
    {
        imgSrc: '/images/Works/NIC.gif',
        title: 'NIC Diner WebPage',
        tags: [
          'Full Stack Development',
          'PHP',
          'MySQL',
          'Bootstrap',
          'jQuery',
          'Payment Gateway',
          'DFD Design',
          'Responsive UI'
        ],
        projectLink: 'https://github.com/YogeshYKG/NIC-Intern-Work'
      },
    //   More Json Objects for Works
   ];
const Work = () => {
  return (
    <section 
        className="section"
        id="work"
    >
        <div className="container ">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work