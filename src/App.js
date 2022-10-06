import React from 'react';
import {baseURL, currentLanguage} from './components/Config';

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
  const [front, setFront] = React.useState([]);
  
  const frontData = React.useMemo(() => {
    return front;
  }, [front]);

  React.useEffect(() => {
    fetch(baseURL + currentLanguage + "/wp-json/wp/v2/pages/21?acf_format=standard")
    .then(res => res.json())
    .then(
      (result) => {
        setFront(result.acf);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
      }
    )
  }, []);

  return (
    <>
      <Header frontData={frontData} />
      <Hero frontData={frontData} />
      <ManifestRow frontData={frontData} type={true} />
      <SliderBlock frontData={frontData} />
      <Burn frontData={frontData} />
      <Advantages frontData={frontData} />
      <ManifestRowTo frontData={frontData} />
      <Accompaniment frontData={frontData} />
      <Application frontData={frontData} />
      <Footer frontData={frontData} />
      <FixedCall frontData={frontData} />
      <Modal frontData={frontData} />
      <Cursor />
    </>
  );
} 

export default App;
