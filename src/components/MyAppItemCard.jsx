/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/** Node Modules */
import PropTypes from "prop-types";



const MyAppItemCard = ({
    imgSrc,
    iframeSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={classes}>
      <img src={imgSrc} alt={label} />
      <h3>{label}</h3>
      <p>{desc}</p>
      <img src={iframeSrc} alt={label} />
      {/* <button onClick={() => window.open(iframeSrc, '_blank')}>Open App</button> */}
    </div>
  )
}

MyAppItemCard.PropTypes = {
    iframeSrc: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default MyAppItemCard
