import React from 'react';
import { ItemsContext } from '../../App';

import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Accompaniment() {
  const { items } = React.useContext(ItemsContext);

  return (
    <section
      className="section-h-trigger possibilities section section-gray section-accompaniment"
      data-section-trigger="light">
      <div className="container">
        <div className="title-lined">
          <div>{items[6].titel}</div>
        </div>
        <div className="def-text">{items[6].text}</div>
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
            {items[6].slider.map((slider) => (
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
