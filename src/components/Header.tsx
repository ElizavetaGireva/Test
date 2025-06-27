import React from 'react';
import "../styles/Header.css";


const Header = () => {
    return (
        <header className="site-header">
            <img src="/logo.png" alt="Logo" className="logo"/>
            <nav className="nav-links">
                <a>Мясо</a>
                <a>Акции</a>
                <a>Наборы</a>
                <a>Блог</a>
                <a>Контакты</a>
            </nav>
            <div className="header-actions">
                <button className="cart-btn">700 ₽ 🛒</button>
                <button className="login-btn">Войти</button>
            </div>
        </header>
    )
};

export default Header;
