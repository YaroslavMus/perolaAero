import React from 'react';

export default function ManifestRow({ frontData }) {
  return (
    <section className="section-h-trigger section desc" data-section-trigger="light">
      <div className="container">
        <div className="manifest-row to">
          <div className="manifest-text">
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: frontData.front_s5_title }}></div>
            <div
              className="desc-text"
              dangerouslySetInnerHTML={{ __html: frontData.front_s5_subtitle }}></div>
          </div>
          <div className="manifest-img">
            <picture>
              <img src={frontData.front_s5_image} alt="PerolaSkyIllustration" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
