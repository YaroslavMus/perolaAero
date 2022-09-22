import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logoText from '../../assets/img/logo-text.svg';

gsap.registerPlugin(ScrollTrigger);

export default function HeaderLogo() {
  React.useEffect(() => {
    let headerEl = $('.header');
    let fixedCallEl = $('.fixed-call');

    function onChangeSection(self) {
      let section = self.trigger;
      if (section.dataset.sectionTrigger === 'light') {
        headerEl.removeClass('header-logo-light');
        headerEl.addClass('header-logo-dark');
      }

      if (section.dataset.sectionTrigger === 'dark') {
        headerEl.removeClass('header-logo-dark');
        headerEl.addClass('header-logo-light');
      }

      if (section.dataset.sectionTrigger === 'default') {
        headerEl.removeClass('header-logo-dark');
        headerEl.removeClass('header-logo-light');
      }
    }
    function onChangeSectionFixedCall(self) {
      let section = self.trigger;
      if (section.dataset.sectionTrigger === 'light') {
        fixedCallEl.addClass('fixed-call-dark');
        fixedCallEl.removeClass('fixed-call-default');
      }

      if (section.dataset.sectionTrigger === 'dark') {
        fixedCallEl.removeClass('fixed-call-dark');
        fixedCallEl.removeClass('fixed-call-default');
      }

      if (section.dataset.sectionTrigger === 'default') {
        fixedCallEl.removeClass('fixed-call-dark');
        fixedCallEl.addClass('fixed-call-default');
      }
    }
    let sections = gsap.utils.toArray('.section-h-trigger');
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',

        end: 'bottom top',

        onEnter: onChangeSection,

        onEnterBack: onChangeSection,
      });
    });
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom-=44px',

        end: 'bottom bottom-=154px',

        onEnter: onChangeSectionFixedCall,

        onEnterBack: onChangeSectionFixedCall,
      });
    });
  }, []);

  return (
    <div className="logo">
      <a href="/" className="back-link">
        <svg className="logo-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.66 220">
          <g>
            <g>
              <g>
                <path d="M102.42,91.53c-2.83,4.42-5.28,9.14-7.29,14.11l36.92,4.71c.7-2.45,1.87-4.69,3.42-6.63-8.34-8.22-20.77-10.62-33.05-12.18Z" />
                <path d="M111.29,80.16c11.02,1.41,24.34,7.06,31.92,17.78,2.2-.89,4.59-1.39,7.11-1.39,10.33,0,18.72,8.25,18.97,18.52l84.38,10.76c-5.72-35.97-33.98-65.28-71.3-70.04-4.28-.55-8.53-.73-12.72-.61-.47,12.06-6.36,21.14-12.32,24.36l.32-3.58c2.64-29.52-17.83-55.88-46.61-60.01L0,0C5.38,13.11,26.54,19.72,36.11,21.84l76.55,17.02-76.78-5.21c6.28,12.6,23.91,16.42,33.3,18.51l49.5,9.21h-49.69c9.14,13.01,25.56,16.67,34.82,17.84l7.47,.95Z" />
                <path d="M150.31,134.56c-7.9,0-14.67-4.83-17.54-11.69l-1.17-.15-25.01-3.19-29.47,70.91,60.85,21.71-8.41-55.22c10.73,30.48,28.97,52.19,67.78,63.08l13-40.27,20.93,2.67,5.89-46.22-71.75-9.15c-3.47,4.57-8.94,7.53-15.12,7.53Z" />
              </g>
            </g>
          </g>
        </svg>
        <div className="logo-text">
          <img src={logoText} alt="" />
        </div>
      </a>
    </div>
  );
}
