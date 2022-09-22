import React from 'react';
import $ from 'jquery';

export default function Hamburger() {
  return (
    <div
      className="hamburger"
      onClick={() => {
        $('.mob-menu').slideDown(200);
        $('body').addClass('no-scroll');
      }}>
      <div></div>
      <div></div>
    </div>
  );
}
