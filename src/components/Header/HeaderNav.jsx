import React from 'react';

export default function HeaderNav({frontData}) {

  if( !frontData.front_menu ) return null;
  
  return (
    <div className="header-nav nav">
      <ul>
      {
        frontData.front_menu.map((menu_item, index) =>
            <li key={index}><a href={menu_item.link}>{menu_item.text}</a></li>
        )
      }
      </ul>
    </div>
  );
}
