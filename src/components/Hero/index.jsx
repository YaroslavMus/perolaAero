import React from 'react';

import HeroVideo from '../../assets/img/hero-video.mp4';

export default function Hero() {
  return (
    <section className="section-h-trigger hero" data-section-trigger="default">
      <video src={HeroVideo} autoPlay={true} loop={true} muted={'muted'}></video>
      <div className="container">
        <div className="hero-inner">
          <div>
            <div>Everywhere. Everything. Now.</div>
          </div>
          <div>
            <div>
              Ваш персональный консьерж-сервис <span>для международных доставок</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
