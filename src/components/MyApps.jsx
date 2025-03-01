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
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const appitemcard = [
  {
    iframeSrc: "https://social-media-six-gray.vercel.app/",
    imgSrc: "",
    gitSrc: "https://github.com/YogeshYKG/social-media",
    label: "Social Media Dashboard",
    desc: "A React JS social media dashboard application with user interaction features",
    tags: [
      "React",
      "JavaScript",
      "Social Media",
      "Dashboard",
      "User Interface",
    ],
  },
  {
    iframeSrc: "https://weather-app-ruddy-two-48.vercel.app/",
    imgSrc: "/images/MyAppItem/WeatherApp.png",
    gitSrc: "https://github.com/YogeshYKG/WeatherApp",
    label: "WeatherApp",
    desc: "A Vite React JS application that fetches and displays real-time weather data using the OpenWeatherMap API",
    tags: [
      "Vite",
      "React",
      "JavaScript",
      "WeatherApp",
      "OpenWeatherMap API",
      "API Integration",
      "Real-time Data",
    ],
  },
  {
    iframeSrc: "https://quote-generator-ecru-xi.vercel.app/",
    imgSrc: "/images/MyAppItem/quote-generator.png",
    gitSrc: "",
    label: "Random Quote Generator",
    desc: "A Vite React JS application that fetches random quotes via API and displays them with a typewriter animation effect",
    tags: [
      "Typewriter Effect",
      "Random Quote",
      "React",
      "API Fetch",
      "Tailwind CSS",
      "JavaScript",
      "Quote Generator",
    ],
  },
  {
    iframeSrc: "https://react-food-app-pz1u.vercel.app/",
    imgSrc: "",
    gitSrc: "https://github.com/YogeshYKG/React-Food-App",
    label: "Food Ordering App",
    desc: "A React-based food ordering application with menu display and ordering functionality",
    tags: ["React", "JavaScript", "Food Ordering", "E-commerce", "UI/UX"],
  },
  {
    iframeSrc: "https://react-dynamic-clock.vercel.app/",
    imgSrc: "",
    gitSrc: "https://github.com/YogeshYKG/React-dynamic-clock",
    label: "Dynamic Clock",
    desc: "A React JS application displaying a real-time dynamic clock",
    tags: ["React", "JavaScript", "Dynamic Clock", "Real-time", "Time Display"],
  },
  {
    iframeSrc: "https://stopwatch-lac-nu.vercel.app/",
    imgSrc: "/images/MyAppItem/StopWatch.png",
    gitSrc: "",
    label: "StopWatch",
    desc: "A Vite React JS application featuring a stopwatch with start, stop, and reset functionalities",
    tags: ["Vite", "React", "JavaScript", "Tailwind CSS", "StopWatch", "Timer"],
  },
  {
    iframeSrc: "https://react-calculator-app-six.vercel.app/",
    imgSrc: "",
    gitSrc: "https://github.com/YogeshYKG/React-Calculator-App",
    label: "Calculator",
    desc: "A React JS calculator application with basic arithmetic operations",
    tags: [
      "React",
      "JavaScript",
      "Calculator",
      "Math Operations",
      "Functional Components",
    ],
  },
  // Remaining item
  {
    iframeSrc: "https://paste-app-gilt-two.vercel.app",
    imgSrc: "/images/MyAppItem/PasteApp.png",
    gitSrc: "",
    label: "PasteApp",
    desc: "A Vite React JS application for creating and managing text snippets",
    tags: ["Vite", "React", "JavaScript", "PasteApp", "Text Management"],
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
    <section id="MyApps" className="section">
      <div className="container pb-32">
        <Reveal>
          <h2 className="headline-2 reveal-up">
            My Apps, Tools & Project Ideas
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up pb-32">
            Discover the state-of-the-art apps, tools, and innovative project
            ideas I have developed to create superior, high-efficiency websites
            and applications.
          </p>
        </Reveal>
        {/* Swiper Slider for My Apps */}
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
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
          {appitemcard.map(({ imgSrc, iframeSrc, label, desc, tags }, key) => (
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
          ))}
        </Swiper>
      </div>

      {selectedIframe && (
        <MyAppItemCardIframe
          iframeSrc={selectedIframe}
          onClose={handleCloseIframe}
        />
      )}
    </section>
  );
};

export default MyApps;
