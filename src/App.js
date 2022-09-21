import React from 'react';

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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ManifestRow type={true} />
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
    </>
  );
}

export default App;
