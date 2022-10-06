let storedLanguage = localStorage.getItem('currentLanguage');
if (!storedLanguage) {
    storedLanguage = 'ru';
    localStorage.setItem('currentLanguage', storedLanguage);
};

export const currentLanguage = storedLanguage;
export const baseURL = 'https://skycourier.ittimenow.com/';