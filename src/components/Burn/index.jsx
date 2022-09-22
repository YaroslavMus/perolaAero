import React from 'react';

import bac1 from '../../assets/img/Burn/history_1920px.jpg';
import bac2 from '../../assets/img/Burn/history_1440px.jpg';
import bac3 from '../../assets/img/Burn/history_770px.jpg';
import bac4 from '../../assets/img/Burn/history_320px.jpg';

export default function SliderPanorama() {
  return (
    <section className="section-h-trigger section-burn" data-section-trigger="dark">
      <div className="burn">
        <div className="burn-bg">
          <picture>
            <source type='image/jpeg' media="(max-width: 1440px)" srcSet={bac2} />
            <source type='image/jpeg' media="(max-width: 770px)" srcSet={bac3} />
            <source type='image/jpeg' media="(max-width: 320px)" srcSet={bac4} />
            <img src={bac1} alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="burn-content">
            <div>
              Каждая доставка —<br /> <span>отдельная история</span>
            </div>
            <div>
              <p>
                В которой исходя из конкретной задачи и большого разнообразия возможных вариантов,
                мы находим единственно верный, после чего составляем подходящий персональный
                маршрут.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
