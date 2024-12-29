/**
  @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/** Import Components */
import { ButtonPrimary, ButtonOutline } from "./Button"
import Reveal from "./utils/Reveal"

const Hero = () => {
  return (
    <section 
        id="home"
        className="pt-28 lg:pt-36"
    >
        <div className="cointainer py-12 items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg ">
                        <img 
                            src={"/images/Yogesh_avatar1.jpg"} 
                            width={40}
                            height={40}
                            alt="Yogesh Portrait" 
                            className="img-cover" 
                        />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        <Reveal>
                        Available For Work
                        </Reveal>
                    </div>
                </div>

                <Reveal>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-4 mb-8 lg:mb-10">
                    Building Scalable Modern Webpage For Future
                </h2>
                </Reveal>
                <div className="flex items-center gap-3">
                    <a 
                        href="https://raw.githubusercontent.com/YogeshYKG/YogeshYKG/main/Yogesh_CV.pdf" 
                        download="Yogesh_CV.pdf"
                    >
                        <ButtonPrimary 
                            label="Download CV" 
                            icon="download" 
                        />
                    </a>

 

                    <ButtonOutline
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                    /> 
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to to-65% rounded-[60px] overflow-hidden">
                    <img 
                        src={"/images/Avatar1.png"}
                        width={80}
                        height={80} 
                        alt="Yogesh" 
                        className="w-full" 
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero