import React from 'react';
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header-wrapper">
            <header className="site-header">
                <div className="left-block">
                    <img src="/logo.png" alt="Logo" className="logo"/>
                    <nav className="nav-links">
                        <a>Мясо</a>
                        <a>Акции</a>
                        <a>Наборы</a>
                        <a>Блог</a>
                        <a>Контакты</a>
                    </nav>
                </div>
                <div className="right-block">
                    <div className="header-actions">
                        <div className="cart">
                            <span>700 ₽</span>
                            <img src="/cart.png" alt="Корзина" className="cart-icon"/>
                        </div>
                        <button className="login-btn">Войти</button>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;
