import React from "react";
import "../styles/footer.css";

export const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-info">
                    <div className="footer-text">© 2023 AVEJI</div>
                    <div className="footer-text">ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
                </div>

                <div className="footer-p">Политика конфеденциальности / Оплата и доставка</div>

                <div className="footer-social">
                    <div className="footer-vk">ВКОНТАКТЕ</div>
                    <div className="footer-tg">ТЕЛЕГРАМ</div>
                </div>


            </div>
        </footer>

    );
};
