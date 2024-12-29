/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */


/** Component */
import MyAppItemCard from "./MyAppItemCard";
import MyAppItemCardIframe from "./MyAppItemCardIframe";


import React, { useState, useRef, useEffect } from "react";
import Reveal from "./utils/Reveal";

/** Swiper Modules */
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const appitemcard = [
    {
      iframeSrc: 'https://paste-app-gilt-two.vercel.app',
      imgSrc: '/images/MyAppItem/PasteApp.png',
      label: 'PasteApp',
      desc: 'Vite Ract JS App',
      tags: [
        'Vite',
        'Raact',
        'JS',
        'PasteApp',
      ],
    },
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
      const fallbackSrc = "https://default-fallback-url.example.com"; // Fallback URL
      setSelectedIframe(iframeSrc || fallbackSrc); // Set iframe source when card is clicked
    };

    const handleCloseIframe = () => {
        setSelectedIframe(null); // Close the iframe when clicked outside or on close button
    };
  return (
    <section
        id="MyApps" 
        className="section"
    >
             <div className="container pb-32">
    
                <Reveal>
                <h2 className="headline-2 reveal-up">
                    My Apps, Tools & Project Ideas
                </h2>
                </Reveal>
                <Reveal>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up pb-32">
                    Discover the state-of-the-art apps, tools, and innovative project ideas I have developed to create superior, high-efficiency websites and applications.
                </p>
                </Reveal>
                {/* Swiper Slider for My Apps */}
                <Swiper
                    modules={[ EffectCoverflow, Pagination, Navigation, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    // slidesPerView="auto"
                    loop={true}
                    // slidesPerView={3}
                    coverflowEffect={{
                        rotate: -30,
                        stretch: -20,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 2,
                        },
                    }}
                >
                    {
                        appitemcard.map(({ imgSrc, iframeSrc , label, desc, tags }, key) => (
                        <SwiperSlide key={key}>
                            <MyAppItemCard
                              imgSrc={imgSrc}
                              iframeSrc={iframeSrc}
                              label={label}
                              desc={desc}
                              tags={tags}
                              alt={`Image of ${label}`}
                              classes="reveal-up"
                              onCardClick={handleCardClick}
                            />
                        </SwiperSlide>
                        ))
                    }
                
                </Swiper>
    
    
    
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
