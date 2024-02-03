import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './OurFriends.scss';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="//res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34146218c4d7002106ff74_optimized_500_e584x467-42x33?nowebp" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145dbde3b40021e56cbe_optimized?nowebp" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145c18c4d7002106ff5f_optimized?nowebp" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145b18c4d7002106ff59_optimized?nowebp" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e341d034982e3002131ea15_optimized?nowebp" onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
};

export default function OurFriends() {
    return (
        <div className="our-friends-container">
            <div className="container">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
            </div>
        </div>
    )
}