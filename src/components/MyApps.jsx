/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */


/** Component */
import MyAppItemCard from "./MyAppItemCard";
import MyAppItemCardIframe from "./MyAppItemCardIframe";


import React, { useState } from "react";


const appitemcard = [
    {
      iframeSrc: 'https://paste-app-gilt-two.vercel.app',
      imgSrc: '/images/MyAppItem/PasteApp.png',
      label: 'PasteApp',
      desc: 'Vite Ract JS App',
      tags: [
        'Vite',
        'Raect',
        'JS',
        'PasteApp',
      ],
    },
];

const MyApps = () => {

    const [selectedIframe, setSelectedIframe] = useState(null);

    const handleCardClick = (iframeSrc) => {
        setSelectedIframe(iframeSrc); // Set iframe source when card is clicked
    };

    const handleCloseIframe = () => {
        setSelectedIframe(null); // Close the iframe when clicked outside or on close button
    };
  return (
    <section
        id="MyApps" 
        className="section"
    >
             <div className="container">
    
                <h2 className="headline-2 reveal-up">
                    My Apps, Tools & Project Ideas
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the state-of-the-art apps, tools, and innovative project ideas I have developed to create superior, high-efficiency websites and applications.
                </p>
    
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                    {
                        appitemcard.map(({ imgSrc, iframeSrc , label, desc, tags }, key) => (
                        <MyAppItemCard 
                            key={key}
                            imgSrc={imgSrc}
                            iframeSrc={iframeSrc}   
                            label={label}
                            desc={desc}
                            tags={tags}
                            classes="reveal-up"
                            onCardClick={handleCardClick}
                        />
                        ))
                    }
                </div>
    
    
    
            </div>

            {selectedIframe && (
                <MyAppItemCardIframe 
                    iframeSrc={selectedIframe}
                    onClose={handleCloseIframe} 
                />
            )}
        </section>
  )
}

export default MyApps
