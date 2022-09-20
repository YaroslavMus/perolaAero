import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import ManifestRow from './components/ManifestRow';
import SliderBlock from './components/SliderBlock';
import Burn from './components/Burn';
import Advantages from './components/Advantages';
import Accompaniment from './components/Accompaniment';
import Application from './components/Application';
import FixedCall from './components/FixedCall';
import Footer from './components/Footer';
import Modal from './components/Modal';

import './style/normalize.css';
import './style/style.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ManifestRow />
      <SliderBlock />
      <Burn />
      <Advantages />
      <ManifestRow />
      <Accompaniment />
      <Application />
      <Footer />
      <FixedCall />
      <Modal />
    </>
  );
}

export default App;
