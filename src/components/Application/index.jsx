import React from 'react';
import { ItemsContext } from '../../App';

export default function Application() {
  const { items } = React.useContext(ItemsContext);

  return (
    <section className="section-h-trigger section section-application">
      <div className="container">
        <div className="title-lined">
          <div>{items[7].titel}</div>
        </div>
        <div className="def-text">
          <p>{items[7].text}</p>
          <div className="pos-button">
            <button>оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
}
