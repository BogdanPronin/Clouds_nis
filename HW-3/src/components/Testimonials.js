import React from "react";
import "../styles/testimonials.css";


export const Testimonials = () => {
  return (
    <div>
      <div className="testimonials">
        <div className="testimonials-wrapper">
            <div className="testimonials-h">
              Отзывы
            </div>

            <div className="testimonials-block">
              <div className="testimonials-block-h">
                Игорь Антонов
              </div>
              <div className="testimonials-block-text">
                Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.  
              </div>
            </div>

            <div className="testimonials-block">
              <div className="testimonials-block-h">
                Ольга Иванова
              </div>
              <div className="testimonials-block-text">
                После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!  
              </div>
            </div>

            <div className="testimonials-block">
              <div className="testimonials-block-h">
                Аркадий Макаров
              </div>
              <div className="testimonials-block-text">
              Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!  
              </div>
            </div>

          </div>
      </div>
      </div>
  );
};
