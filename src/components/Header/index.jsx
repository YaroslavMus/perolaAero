import React from 'react';

import Hamburger from './Hamburger';
import HeaderContacts from './HeaderContacts';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import MobMenu from './MobMenu';

export default function Header({frontData}) {
  const [isHederScroll, setIsHederScroll] = React.useState(0);

  const handleScroll = () => {
    setIsHederScroll(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={isHederScroll < 100 ? 'header' : 'header header-state-scrolling'}>
        <div className="container-fluid">
          <div className="header-row">
            <HeaderNav frontData={frontData} />
            <HeaderLogo />
            <HeaderContacts frontData={frontData} />
            <Hamburger />
          </div>
        </div>
      </header>
      <MobMenu />
    </>
  );
}
