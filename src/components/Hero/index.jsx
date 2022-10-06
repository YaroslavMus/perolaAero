import React from 'react';
import { ItemsContext } from '../../App';

import HeroVideo from '../../assets/img/hero-video.mp4';

export default function Hero({frontData}) {
  return (
    <section className="section-h-trigger hero" data-section-trigger="default">
      <video src={HeroVideo} autoPlay={true} loop={true} muted={'muted'}></video>
      <div className="container">
        <div className="hero-inner">
          <div>
            <div dangerouslySetInnerHTML={{__html: frontData.front_upheader}}></div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{__html: frontData.front_title}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
