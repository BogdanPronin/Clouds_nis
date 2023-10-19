import React from "react";
import "../styles/header.css";
import { ReactComponent as Logo } from '../images/logo.svg';

export const Header= () => {
  return (
    <div className="header">
      <Logo />
      <div className="header-wrapper">
        <div className="header-a">О нас</div>
        <div className="header-b">Проекты</div>
        <div className="header-c">Материалы</div>
        <div className="header-d">Отзывы</div>
        <div className="header-e">+7 999 999 99 99</div>
      </div>
    </div>
  );
};