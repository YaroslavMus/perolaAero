import React from 'react';
import $ from 'jquery';

export default function Hamburger() {
  $('.mob-menu-close').on('click', function (e) {
    $('.mob-menu').slideUp(200);
  });
  return (
    <div
      className="hamburger"
      onClick={() => {
        $('.mob-menu').slideDown(200);
      }}>
      <div></div>
      <div></div>
    </div>
  );
}
