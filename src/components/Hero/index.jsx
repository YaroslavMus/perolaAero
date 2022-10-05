import React from 'react';
import { ItemsContext } from '../../App';

import HeroVideo from '../../assets/img/hero-video.mp4';

export default function Hero() {
  const { items } = React.useContext(ItemsContext);

  return (
    <section className="section-h-trigger hero" data-section-trigger="default">
      <video src={HeroVideo} autoPlay={true} loop={true} muted={'muted'}></video>
      <div className="container">
        <div className="hero-inner">
          <div>
            <div>{items[0].titel}</div>
          </div>
          <div>
            <div>{items[0].text}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
