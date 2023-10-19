import React from "react";
import "../styles/steps.css";

export const Steps = () => {
  return (


    <div className="steps">
      <div className="steps-wrapper">
        <div className="steps-text">Как мы работаем</div>

        <p className="steps-h">Алгоритм работы с нами для удобства и понимания проекта</p>

        <div className="steps-items">


          <div className="steps-step">
            <div className="steps-step-h">Идея</div>
            <p className="steps-step-text">
              Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем,
              как это реализовать, делаем технические чертежи и предлагаем решения по материалам.
            </p>
          </div>

          <div className="steps-step">
            <div className="steps-step-h">Техническое задание</div>
            <p className="steps-step-text">
              Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж
              с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.
            </p>
          </div>

          <div className="steps-step">
            <div className="steps-step-h">Коммерческое предложение</div>
            <p className="steps-step-text">
              Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы
              или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение
            </p>
          </div>

          <div className="steps-step">
            <div className="steps-step-h">Подготовка рабочего проекта</div>
            <p className="steps-step-text">
              Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе
              утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.
            </p>
          </div>

          <div className="steps-step">
            <div className="steps-step-h">Производство и монтаж</div>
            <p className="steps-step-text">
              Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся
              самостоятельно. Ведь мы это сделаем быстро и аккуратно.
            </p>
          </div>

        </div>
      </div>
    </div>

  );
};
