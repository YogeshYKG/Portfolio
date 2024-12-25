/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/** Node Module */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";


const WorkCard = ({

    imgSrc, 
    title,
    tags,
    projectLink,
    classes
}) => {
    const imgRef = useRef(null);
    useEffect(() => { 
        const imgElement = imgRef.current;
        let interval;
        const playGift = () => {
            imgElement.src = imgSrc;
        };
        const pauseGif = () => {
            imgElement.src = imgSrc;
        };
        interval = setInterval(() => {
            playGift();
            setTimeout(pauseGif, 3000);
        }, 2000);

    }, [imgRef]);

const isGitRepo = projectLink.includes('github.com');
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
                src={imgSrc} 
                alt={title}
                loading='lazy' 
                className="img-cover" 
            />
        </figure>

        <div className="grid grid-cols-[1fr_auto] items-start gap-4">
            <div>
                <h3 className="title-1 mb-2">
                    {title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span
                            key={key}
                            className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                <span 
                    className="material-symbols-rounded"
                    aria-hidden="true"
                >
                    {isGitRepo? 'code_branch' : 'arrow_outward'}
                </span>
            </div>
        </div>


        <a 
            href={projectLink}
            target='_blank'
            className="absolute inset-0 "
        >

        </a>
    </div>
  )
}

WorkCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired, 
    projectLink: PropTypes.string,
    classes:  PropTypes.string
}

export default WorkCard