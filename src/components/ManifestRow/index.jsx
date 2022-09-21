import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PerolaSkyIllustration from '../../assets/img/Perola_Sky_Illustration_1_1.png';
import PerolaSkyIllustrationTo from '../../assets/img/Perola_Sky_Illustration_1_2.png';

export default function ManifestRow(props) {
  let isActiveManifestRow = props.type;
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
    <section className="section-h-trigger section desc" data-section="light">
      <div className="container">
        {isActiveManifestRow ? (
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
        ) : (
          <div className="manifest-row to">
            <div className="manifest-text">
              <div className="title">ваше Спокойствие превыше всего</div>
              <div className="desc-text">
                <span>Каждая посылка застрахована</span>, а наш консьерж-курьер заберет и доставит
                необходимую вещь лично в руки.
              </div>
            </div>
            <div className="manifest-img">
              <picture>
                <img src={PerolaSkyIllustrationTo} alt="PerolaSkyIllustration" />
              </picture>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
