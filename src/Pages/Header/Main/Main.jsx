import React from 'react';
import './Main.scss';

export default function Main() {
    return (
        <section id='main'>
            <div className="background_wrapper">
                <div className="background"></div>
            </div>
            <div className="container">
                <span className="text-content">
                    <span className="hero-color-text">Столы трансформеры </span>
                    <span className="hero-dark-text">с доставкой по Казахстану</span>
                </span>
                <p>Трансформируй пространство с нашими столами! Производство, стиль, доставка - все в одном!</p>
                <button className="btn btn-primary-filled ">Лучшие продукты</button>
            </div>
        </section>
    )
}
