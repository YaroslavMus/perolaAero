import React from 'react';
import {currentLanguage} from '../Config.js';

export default function HeaderContacts({frontData}) {
  let displayLanguage = 'en';

  if( currentLanguage === 'ru' ) {
    displayLanguage = 'en';
  } else {
    displayLanguage = 'ru';
  }

  const [selectedLanguage, setSelectedLanguage] = React.useState(null);

  const changeLanguage = () => {
    let currentLang = localStorage.getItem('currentLanguage');
    switch (currentLang) {
      case 'en':
        localStorage.setItem('currentLanguage', 'ru');
        currentLang = 'ru';
        break;
      default:
        localStorage.setItem('currentLanguage', 'en');
        currentLang = 'en';
    }
    setSelectedLanguage(currentLang);
  }

  return (
    <div className="header-contacts">
      <ul>
        <li>
          <a href={'tel:' + frontData.site_phone}> {frontData.site_phone} </a>
        </li>
        <li>
          <a href={frontData.site_telegram} className="social-link">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.5 10.2511C19.5 15.3338 15.2599 19.4777 10 19.4777C4.74014 19.4777 0.5 15.3338 0.5 10.2511C0.5 5.1683 4.74014 1.02441 10 1.02441C15.2599 1.02441 19.5 5.1683 19.5 10.2511Z"
                stroke="white"
              />
              <path
                d="M4.57654 10.0403L14.2182 6.42441C14.6657 6.26716 15.0565 6.5306 14.9115 7.18877L14.9124 7.18796L13.2707 14.7107C13.149 15.2441 12.8232 15.3738 12.3674 15.1225L9.86736 13.3304L8.66153 14.4603C8.5282 14.59 8.4157 14.6994 8.15737 14.6994L8.33487 12.2248L12.9682 8.15333C13.1699 7.98068 12.9232 7.88341 12.6574 8.05525L6.93154 11.5617L4.46321 10.8128C3.92737 10.6474 3.91571 10.2916 4.57654 10.0403Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="" onClick={changeLanguage}> {displayLanguage} </a>
        </li>
      </ul>
    </div>
  );
}
