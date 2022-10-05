import React from 'react';
import { ItemsContext } from '../../App';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ManifestRow() {
  const { items } = React.useContext(ItemsContext);

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
        <div className="manifest-row to">
          <div className="manifest-text">
            <div className="title">{items[5].titel}</div>
            <div className="desc-text">{items[5].text}</div>
          </div>
          <div className="manifest-img">
            <picture>
              <img src={items[5].img} alt="PerolaSkyIllustration" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
