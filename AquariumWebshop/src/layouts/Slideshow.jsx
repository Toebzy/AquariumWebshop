import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../assets/images/swag.png';
import image2 from '../assets/images/yolo.png';
import image3 from '../assets/images/lmao.png';
import image4 from '../assets/images/rofl.png';

const Slideshow = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Determine the next tab and direction
      const nextTab = (activeTab + direction) % 4;
      const nextDirection = nextTab === 0 && direction === -1 ? 1 : direction;

      // Change the active tab and direction
      setActiveTab(nextTab);
      setDirection(nextDirection);
    }, 6000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(intervalId);
    };
  }, [activeTab, direction]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-images">
        {[0, 1, 2, 3].map((index) => (
          <img
            key={index}
            src={index === activeTab ? (index === 0 ? image1 : index === 1 ? image2 : index === 2 ? image3 : image4) : ''}
            alt=""
            className={index === activeTab ? 'active' : ''}
            style={{ transform: `translateX(${(index - activeTab) * 100}%)` }}
          />
        ))}
      </div>

      <div className="circle-navigation">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`circle ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;