
import React from 'react';
import './AboutUs.scss';
import MainPhoto from '../../assets/imgs/best_sales/2.jpg';
import ControlledAccordions from '../../components/ControlledAccordions/ControlledAccordions';

export default function AboutUs() {
    return (
        <section id="aboutUs">
            <div className="container">
                <div className="aboutUs-wrapper">
                    <span>О нас</span>
                    <span>Мы продаем дизайнерские трансформируемые столы по всей территории Казахстана</span>
                    <ControlledAccordions></ControlledAccordions>
                </div>
                <img src={MainPhoto} alt="" height={'auto'} width={'50%'}/>
            </div>
        </section>
    )
}
