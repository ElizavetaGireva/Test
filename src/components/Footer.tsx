import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h4>Категории</h4>
                    <ul>
                        <li>Мясо</li>
                        <li>Наборы</li>
                        <li>Акции</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>О компании</h4>
                    <ul>
                        <li>Контакты</li>
                        <li>Вакансии</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Помощь</h4>
                    <ul>
                        <li>Доставка</li>
                        <li>Оплата</li>
                        <li>Возврат</li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h4>Подпишитесь на новости</h4>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Ваш E-mail"/>
                        <button type="submit">Подписаться</button>
                    </form>
                    <div className="social-icons">
                        <img src="/tg.png" alt="Telegram"/>
                        <img src="/vk.png" alt="VK"/>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Политика конфиденциальности</p>
                <p>Copyright</p>
            </div>
        </footer>
    );
};

export default Footer;
