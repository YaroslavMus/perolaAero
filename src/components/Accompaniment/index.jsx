import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import card1 from '../../assets/img/accompaniment-card-1.jpg';
import card2 from '../../assets/img/accompaniment-card-2.jpg';
import card3 from '../../assets/img/accompaniment-card-3.jpg';
import card4 from '../../assets/img/accompaniment-card-4.jpg';
import card5 from '../../assets/img/accompaniment-card-5.jpg';

export default function Accompaniment() {
  return (
    <section
      className="section-h-trigger possibilities section section-gray section-accompaniment"
      data-section-trigger="light">
      <div className="container">
        <div className="title-lined">
          <div>
            Мы будем рядом <span>на протяжении всего пути</span>
          </div>
        </div>
        <div className="def-text">
          Вы можете воспользоваться услугой <span>личного сопровождения</span> для вас или ваших
          близких во время перелёта.
        </div>
        <div className="swiper-container swiper-possibilities swiper-accompaniment ">
          <Swiper
            slidesPerView={'auto'}
            hashNavigation={{
              watchState: true,
            }}
            navigation={true}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar, Navigation]}>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={card1} alt="" />
                </div>
                <div>Перелеты с детьми до 18 лет</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={card2} alt="" />
                </div>
                <div>Транспортировка домашних животных</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={card3} alt="" />
                </div>
                <div>Медицинское сопровождение</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={card4} alt="" />
                </div>
                <div>Помощь людям со специальными потребностями </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={card5} alt="" />
                </div>
                <div>Личная охрана</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
