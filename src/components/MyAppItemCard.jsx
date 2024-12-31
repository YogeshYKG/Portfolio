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
    alt,
    classes,
    onCardClick
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (

      <div className="">
        <div className="">
        <div
            className={`relative p-4 rounded-2xl ring-4 ring-inset ring-sky-700 border border-sky-300 transition-all duration-500 bg-cover bg-top h-full min-h-[30rem]`}
            style={{
                backgroundImage: `url(${imgSrc})`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onCardClick(iframeSrc)} // Pass iframeSrc to MyApp component
        >
            <div
                className={`absolute inset-0 w-full h-full rounded-2xl ${isHovered ? 'opacity-100 filter blur-[3px] bg-cover bg-top' : 'opacity-0'} transition-all duration-1000`}
                style={{
                    backgroundImage: `url(${imgSrc})`,
                }}
            ></div>

            <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-cover bg-no-repeat w-4/5 h-3/5 rounded-2xl ring-4 ring-inset ring-sky-700 border border-sky-300 
                    ${isHovered ? 'opacity-100 translate-y-6' : 'opacity-0 translate-y-0'} transition-all duration-1000`}
                style={{
                    backgroundImage: `url(${imgSrc})`,
                }}
            ></div>

            {/* Main Content Container */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between items-center transition-all duration-1000 px-8">
                {/* Label at 45% from top */}
                <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-full transition-all duration-1600">
                    <h3 className="text-[#22D3EE] text-2xl title-1 mb-4 drop-shadow hover:text-4xl transition-all text-center">
                        {label}
                    </h3>
                </div>

                {/* Description at 55% from top */}
                <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-full transition-all duration-2400">
                    <p className="text-[#FBBF24] text-sm hover:text-base transition-all text-center">
                        {desc}
                    </p>
                </div>

                {/* Tags at the bottom */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 w-full">
                    {tags.map((label, key) => (
                        <span
                            key={key}
                            className="h-8 text-sm text-zinc-300 bg-zinc-50/5 hover:bg-zinc-800 hover:text-base transition-all grid items-center px-3 rounded-lg"
                        >
                            {label}
                        </span>
                    ))}
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
    alt: PropTypes.string,
    classes: PropTypes.string,
    onCardClick: PropTypes.func.isRequired
};

export default MyAppItemCard;
