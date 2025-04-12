"use Client";

import React, { useState, useRef, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

const ImageSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = '',
  afterLabel = ''
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    if (e.touches) handleTouchMove(e.touches[0]);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setPosition(percentage);
  };

  const handleTouchMove = (touch) => {
    if (!isResizing || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setPosition(percentage);
  };

  useEffect(() => {
    const events = {
      mouse: {
        move: handleMouseMove,
        up: handleMouseUp
      },
      touch: {
        move: (e) => handleTouchMove(e.touches[0]),
        up: handleMouseUp
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', events.mouse.move);
      window.addEventListener('mouseup', events.mouse.up);
      window.addEventListener('touchmove', events.touch.move);
      window.addEventListener('touchend', events.touch.up);
    }

    return () => {
      window.removeEventListener('mousemove', events.mouse.move);
      window.removeEventListener('mouseup', events.mouse.up);
      window.removeEventListener('touchmove', events.touch.move);
      window.removeEventListener('touchend', events.touch.up);
    };
  }, [isResizing]);

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-[200px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl"
    >
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          className="absolute inset-0 w-full h-full object-cover" 
          loading="lazy"
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        className="absolute top-[10%] bottom-[10%] w-0.5 bg-white cursor-ew-resize select-none touch-none"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <GripVertical className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
