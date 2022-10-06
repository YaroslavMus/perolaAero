import React from 'react';
import { ItemsContext } from '../../App';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function SliderBlock({frontData}) {

  if( !frontData.front_s3_images ) return null;

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
          <div dangerouslySetInnerHTML={{__html: frontData.front_s3_title}}></div>
        </div>
        <div className="def-text" dangerouslySetInnerHTML={{__html: frontData.front_s3_subtitle}}></div>
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
            {
              frontData.front_s3_images.map((slide_item, index) =>
                <SwiperSlide key={index}>
                  <div className="possibilities-preview">
                    <div>
                      <img src={slide_item.image} alt={slide_item.title} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: slide_item.title}}></div>
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
