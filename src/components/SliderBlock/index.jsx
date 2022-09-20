import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import slider1 from '../../assets/img/slider/slider-1.png';
import slider2 from '../../assets/img/slider/slider-2.png';
import slider3 from '../../assets/img/slider/slider-3.png';
import slider4 from '../../assets/img/slider/slider-4.png';
import slider5 from '../../assets/img/slider/slider-5.png';
import slider6 from '../../assets/img/slider/slider-6.png';

export default function SliderBlock() {
  return (
    <section
      className="
      section-h-trigger section section-gray
      possibilities
      section-title-a
    "
      data-section-trigger="light">
      <div className="container">
        <div className="title-lined">
          <div>То, что действительно важно </div>
        </div>
        <div className="def-text">Мы поможем вам отправить или получить.</div>
        <div className="swiper-container swiper-possibilities">
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
                  <img src={slider1} alt="" />
                </div>
                <div>Личные вещи</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={slider2} alt="" />
                </div>
                <div>Лекарства, которые сложно заказать</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={slider3} alt="" />
                </div>
                <div>Оригиналы важных документов</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={slider4} alt="" />
                </div>
                <div>Образцы материалов или техника для рабочих процессов</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={slider5} alt="" />
                </div>
                <div>Любимые домашние животные</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibilities-preview">
                <div>
                  <img src={slider6} alt="" />
                </div>
                <div>Одежда, аксессуары, и любые вещи для себя или в подарок близким</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
