import React from "react";
import "../styles/about.css";


export const About = () => {
    return (

        <div className="about">
            <div className="about-wrapper">
                <div className="about-h">
                    Более 5 лет создаем мебель для вашего комфорта
                </div>

                <div className="about-text">
                    <div className="about-text-p">
                        Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.
                    </div>
                    <div className="about-text-p">
                        Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.
                    </div>
                    <div className="about-text-p">
                        В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.
                    </div>
                </div>

                <div className="about-info">
                    <div className="about-info-h">
                        1 год
                    </div>
                    <div className="about-info-text">
                        гарантии на всю продукцию
                    </div>

                    <div className="about-info-h">
                        300+
                    </div>
                    <div className="about-info-text">
                        выполненных проектов
                    </div>

                    <div className="about-info-h">
                        15 дней
                    </div>
                    <div className="about-info-text">
                        срок производства
                    </div>
                </div>
            </div>
        </div>

    );
};
