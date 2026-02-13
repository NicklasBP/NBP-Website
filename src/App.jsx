import { useState, useEffect } from 'react'

import About from './components/About';
import Gallery from './components/Gallery';
import Media from './components/Media';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';




function App() {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const isBackgroundPicture = activeTab === 'home';

  useEffect(() => {
    document.body.classList.toggle("bg-active", isBackgroundPicture);
    document.body.classList.toggle("bg-inactive", !isBackgroundPicture);
  }, [isBackgroundPicture]);

 




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
