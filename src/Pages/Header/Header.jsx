import React from 'react';
import './Header.scss';
import logo from '../../assets/imgs/logo.png';

export default function Header() {
    return (
        <header>
            <div className="container">
                <img src={logo} alt=""  height={90}/>
                <div className="navigate_menu">
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#products">Продукты</a></li>
                            <li><a href="#aboutUs">О нас</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                    <button className="btn btn-primary">Купить сейчас</button>
                </div>
            </div>
        </header>
    )
}
