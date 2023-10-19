import React from "react";
import "../styles/hero.css";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";

export const Hero = () => {
  return (

    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          ЭКСКЛЮЗИВНАЯ И НЕСТАНДАРТНАЯ МЕБЕЛЬ ДЛЯ ДОМА
        </div>
        <a className="hero-link" href="#asd">ЗАКАЗАТЬ ПРОЕКТ</a>
        <div className="hero-left-block">
          <p className="hero-p">
            Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.
          </p>
          <img className="hero-photo2" src={photo2} />
        </div>
        <img className="hero-photo1" src={photo1} />
      </div>
    </div>

  );
};
