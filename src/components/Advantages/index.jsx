import React from 'react';
import { ItemsContext } from '../../App';

export default function Advantages() {
  const { items } = React.useContext(ItemsContext);

  return (
    <section
      className="section-h-trigger section section-blue section-list"
      data-section-trigger="dark">
      <div className="container">
        <div className="advantages">
          {items[4].block.map((block) => (
              <div className="advantages-col">
                <div>{block.titel}</div>
                <div>{block.text}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
