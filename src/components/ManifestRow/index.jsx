import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ManifestRow({ frontData }) {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: '.desc',
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <section className="section-h-trigger section desc" data-section-trigger="light">
      <div className="container">
        <div className="manifest-row">
          <div className="manifest-text">
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: frontData.front_s2_title }}></div>
            <div
              className="desc-text"
              dangerouslySetInnerHTML={{ __html: frontData.front_s2_subtitle }}></div>
          </div>
          <div className="manifest-img">
            <picture>
              <img src={frontData.front_s2_image} alt="PerolaSkyIllustration" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
