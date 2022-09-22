import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PerolaSkyIllustration from '../../assets/img/Perola_Sky_Illustration_1_1.png';

export default function ManifestRow(props) {
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
            <div className="title">Время бесценно</div>
            <div className="desc-text">
              Поэтому мы не тратим ни секунды доставляя важные для вас вещи
              <span>по всему миру.</span>
            </div>
          </div>
          <div className="manifest-img">
            <picture>
              <img src={PerolaSkyIllustration} alt="PerolaSkyIllustration" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
