/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */


/** Component */
import MyAppItemCard from "./MyAppItemCard";

const appitemcard = [
    {
      iframeSrc: '/images/Icons/figma.svg',
      imgSrc: '/images/Icons/figma.svg',
      label: 'PasteApp',
      desc: 'Vite Ract JS App'
    },
];

const MyApps = () => {
  return (
    <section className="section">
            <div className="container">
    
                <h2 className="headline-2 reveal-up">
                    My Apps, Tools & Project Ideas
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the state-of-the-art apps, tools, and innovative project ideas I have developed to create superior, high-efficiency websites and applications.
                </p>
    
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                    {
                        appitemcard.map(({ imgSrc, iframeSrc , label, desc }, key) => (
                        <MyAppItemCard 
                            key={key}
                            imgSrc={imgSrc}
                            iframeSrc={iframeSrc}
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

export default MyApps
