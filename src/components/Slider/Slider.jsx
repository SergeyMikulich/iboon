import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.scss';

const handleDragStart = (e) => e.preventDefault();


export default function Slider ({images}) {
  const items = images.map((image) => <img className="slider-img" onDragStart={handleDragStart} role="presentation" src={image} alt="" />);
  return (
    <div className="slider">
        <AliceCarousel mouseTracking items={items} />
    </div>
  );
}