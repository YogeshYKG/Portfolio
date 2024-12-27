/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */



import PropTypes from 'prop-types';

const MyAppItemCardIframe = ({ iframeSrc, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-overlay') {
      onClose();
    }
  };

  return (
    <div 
      id="popup-overlay" 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
      onClick={handleOutsideClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] h-[80%] bg-white p-4 rounded-lg overflow-hidden"
      >
        <button 
          className="absolute top-2 right-2 text-black bg-white rounded-full p-2 shadow-md"
          onClick={onClose}
        >
          <span className="text-black material-symbols-rounded">close</span>
        </button>
        <iframe 
          src={iframeSrc} 
          width="100%" 
          height="100%" 
          title="Iframe Content" 
          className="border-none"
        ></iframe>
      </div>
    </div>
  );
};

MyAppItemCardIframe.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MyAppItemCardIframe;
