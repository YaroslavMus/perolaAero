import React from 'react';

export default function Advantages({frontData}) {

  if( !frontData.front_s4_slogans ) return null;
  
  return (
    <section
      className="section-h-trigger section section-blue section-list"
      data-section-trigger="dark">
      <div className="container">
        <div className="advantages">
        {
          frontData.front_s4_slogans.map((slogan, index) => 
          <div className="advantages-col" key={index}>
            <div dangerouslySetInnerHTML={{__html: slogan.title}}></div>
            <div dangerouslySetInnerHTML={{__html: slogan.subtitle}}></div>
          </div>
          )
        }
        </div>
      </div>
    </section>
  );
}
