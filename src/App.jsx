import { useState, useEffect } from 'react'
import './App.css'

import About from './components/About';
import Gallery from './components/Gallery';
import Media from './components/Media';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';


import "./App.css";



function App() {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const isBackgroundPicture = activeTab === 'home';

  useEffect(() => {
    document.body.classList.toggle("bg-active", isBackgroundPicture);
    document.body.classList.toggle("bg-inactive", !isBackgroundPicture);
  }, [isBackgroundPicture]);

  /*

    <div className="name">
        <h1>Nicklas Bjärnhall Prytz</h1>
      </div>*/



  return (
    <>

    

      <Header setActiveTab={setActiveTab} activeTab={activeTab} />

      <div className="App">
          {activeTab === "home" && <Home activeTab={activeTab} />}
          {activeTab === "about" && <About />}
          {activeTab === "contact" && <Contact />}
          {activeTab === "media" && <Media />}
          {activeTab === "photos" && <Gallery />}
      </div >
    </>
  );
}

export default App;
