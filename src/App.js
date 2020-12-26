import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Custom from './components/Custom';

export default function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [custom, setCustom] = useState(false);
  const [results, setResults] = useState(false);

  return (
    <>
      <Navbar setHome={setHome} setAbout={setAbout} setCustom={setCustom} setResults={setResults}/>
      {home && <Home />}
      {about && <About />}
      {custom && <Custom />}
    </>
  );
}
