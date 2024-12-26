/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */




/** Node Modules */
import PropTypes from "prop-types";
import { useState } from "react";

const MyAppItemCard = ({
    imgSrc,
    iframeSrc,
    label,
    desc,
    tags,
    classes,
    onCardClick
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (

      <div className="">
        <div className="">
          <div 
              className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors bg-cover bg-center-right bg-top  h-full min-h-[20rem]`}
              style={{
                  backgroundImage: `url(${imgSrc})`,
                  
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => onCardClick(iframeSrc)} // Pass iframeSrc to MyApp component
          >
            <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`transform ${isHovered ? 'translate-y-[-4rem]' : 'translate-y-[0rem]'} transition-all duration-1600`}>
                      <h3 className="text-zinc-100 text-xl title-1 mb-2">{label}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className="h-8 text-sm text-zinc-300 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                            >
                                {label}
                            </span>
                        ))}
                  </div>
                  <div className={`transform ${isHovered ? 'translate-y-[-6rem]' : 'translate-y-[0rem]'} transition-all duration-2400`}>
                      <p className="text-zinc-300 text-sm">{desc}</p>
                  </div>
            </div>

          </div>
        </div>

      </div>
        
    );
};

MyAppItemCard.propTypes = {
    iframeSrc: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired, 
    classes: PropTypes,
    onCardClick: PropTypes.func.isRequired
};

export default MyAppItemCard;
