import React, { useEffect, useState } from 'react';
import './ProductInfo.scss'; // Подключите стили для кастомизации
import Slider from '../../components/Slider/Slider';
import CallMiniPage from '../../components/CallMiniPage.jsx/CallMiniPage';


export default function ProductInfo({ urls, parameters, title, price, description, onClose, setShowInfo }) {
    const [showCallMiniPage, setShowCallMiniPage] = useState(false);

    const handleBuyClick = async () => {
        setShowCallMiniPage(true);
    };

    const handleClose = () => {
        setShowCallMiniPage(false);
        onClose();
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [handleClose]);

    return (
        <div className="product-info-container">
            <button className="close-button btn" onClick={handleClose}>✖</button>
            <div className="product-info-slider">
                <Slider images={urls}></Slider>
            </div>
            <div className="product-info">
                <p className="product-info__title">{title}</p>
                <p className="product-info__price"><b>{price}</b></p>
                <button className="btn btn-primary-filled" onClick={handleBuyClick}>Заказать стол</button>
                <p className="product-info__description">{description}</p>
                <div className="product-info__params">
                    <p><b>Ширина: </b>{parameters.width}</p>
                    <p><b>Высота: </b>{parameters.height}</p>
                </div>
                <p><b>Цена: </b><br></br>
                    {parameters.size.map((size, index) => (
                        <React.Fragment key={index}>
                            <span>{size}</span>
                            {index < parameters.size.length - 1 && <br />}
                        </React.Fragment>
                    ))}</p>
            </div>
            {showCallMiniPage && (
                <div className="overlay">
                    <CallMiniPage />
                </div>
            )}
        </div>
    );
}
