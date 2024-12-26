/**
  @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/** Node modules */
import PropTypes from "prop-types"

/** Primary Buttons */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href) {
        return (
            <a 
                href={href}
                target={target} 
                className={"btn btn-primary " + classes}
            >
                {label}

                {
                    icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true"
                    >{icon}</span>
                    
                    : undefined

                }
            </a>
        )
    }
    else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                {
                    icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true"
                    >{icon}</span>
                    
                    : undefined

                }
            </button>
        )
    }
}

/** Primary Outline */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href) {
        return (
            <a 
                href={href}
                target={target} 
                className={"btn btn-outline " + classes}
            >
                {label}

                {
                    icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true"
                    >{icon}</span>
                    
                    : undefined

                }
            </a>
        )
    }
    else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                {
                    icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true"
                    >{icon}</span>
                    
                    : undefined

                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}
