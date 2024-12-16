import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const checkScrollPosition = () => {
    if (window.scrollY > 100) { // Show button after scrolling 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', checkScrollPosition);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-white text-xl" />
    </button>
  );
};

export default ScrollToTopButton;
