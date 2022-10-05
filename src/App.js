import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Hero from './components/Hero';
import ManifestRow from './components/ManifestRow';
import ManifestRowTo from './components/ManifestRow/ManifestRowTo';
import SliderBlock from './components/SliderBlock';
import Burn from './components/Burn';
import Advantages from './components/Advantages';
import Accompaniment from './components/Accompaniment';
import Application from './components/Application';
import FixedCall from './components/FixedCall';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Cursor from './components/Cursor';

import './style/normalize.css';
import './style/style.css';

export const ItemsContext = React.createContext();

function App() {
  const [items, isItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://633ccd6d7e19b178290275a5.mockapi.io/Mur').then((res) => {
      isItems(res.data);
    });
  }, []);
  return (
    <>
      <ItemsContext.Provider value={{ items }}>
        <Header />
        <Hero />
        <ManifestRow />
        <SliderBlock />
        <Burn />
        <Advantages />
        <ManifestRowTo />
        <Accompaniment />
        <Application />
        <Footer />
        <FixedCall />
        <Modal />
        <Cursor />
      </ItemsContext.Provider>
    </>
  );
}

export default App;
