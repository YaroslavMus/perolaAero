import React from 'react';
import { ItemsContext } from '../../App';

export default function Application({frontData}) {
  return (
    <section className="section-h-trigger section section-application">
      <div className="container">
        <div className="title-lined">
          <div dangerouslySetInnerHTML={{__html: frontData.front_s7_title}}></div>
        </div>
        <div className="def-text">
          <p dangerouslySetInnerHTML={{__html: frontData.front_s7_subtitle}}></p>
          <div className="pos-button">
            <button dangerouslySetInnerHTML={{__html: frontData.front_s7_button}}></button>
          </div>
        </div>
      </div>
    </section>
  );
}
