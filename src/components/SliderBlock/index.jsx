import React from 'react';
import { ItemsContext } from '../../App';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function SliderBlock() {
  const { items } = React.useContext(ItemsContext);

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
          <div>{items[2].titel}</div>
        </div>
        <div className="def-text">{items[2].text}</div>
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
            {items[2].slider.map((slider) => (
              <SwiperSlide>
                <div className="possibilities-preview">
                  <div>
                    <img src={slider.img} alt="" />
                  </div>
                  <div>{slider.titel}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
