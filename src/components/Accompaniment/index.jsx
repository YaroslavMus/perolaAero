import React from 'react';
import { ItemsContext } from '../../App';

import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Accompaniment({frontData}) {
  if( !frontData.front_s6_advantages ) return null;
  
  return (
    <section
      className="section-h-trigger possibilities section section-gray section-accompaniment"
      data-section-trigger="light">
      <div className="container">
        <div className="title-lined">
          <div dangerouslySetInnerHTML={{__html: frontData.front_s6_title}}></div> 
        </div>
        <div className="def-text" dangerouslySetInnerHTML={{__html: frontData.front_s6_subtitle}}></div>
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
            {
              frontData.front_s6_advantages.map((card, index) => 
              <SwiperSlide key={index}>
                <div className="possibilities-preview">
                  <div>
                    <img src={card.image} alt={card.text} />
                  </div>
                  <div dangerouslySetInnerHTML={{__html: card.text}}></div>
                </div>
              </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
}
