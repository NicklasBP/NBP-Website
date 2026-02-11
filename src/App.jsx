import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myImage from './assets/pressbild_NBP.jpeg';
import instaSvg from './assets/Instagram_Glyph_White.svg';

import { useRef } from 'react';

import { useEffect } from 'react';


import TabButton from './components/TabButton';

import Gallery from './components/Gallery';

import music from './assets/lohengrin.mp3'  // Your music file path

import "./App.css";


function FetchHTML({ filePath }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (!filePath) return;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${filePath}`);
        }
        return response.text();
      })
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error fetching HTML file:", error));
  }, [filePath]); // Re-fetch when filePath changes

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

function App() {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab
  const [animationKey, setAnimationKey] = useState(0);

  const contentAbout = (
    <div className="content" key={animationKey}>
      <img src={myImage} alt="My Example" />
      <FetchHTML filePath={"/about.html"} />
    </div>
  );

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1); // Reset animation key
  }, [activeTab]);

  const contentHome = (

    <div className="content" key={animationKey}>
    </div>
  );
  const contentContact = (
    <div className="content" key={animationKey}>
      <p>Telephone: +46 - 73 594 24 07 <br /> Email: <a href="mailto:nille_prytz@hotmail.com">nille_prytz@hotmail.com</a></p>
    </div>
  );

  const contentMedia = (
    <div className="video" key={animationKey}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iTj-GP_exCg?si=lODzTKmaIcS1bG-h&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );

  const isBackgroundPicture = activeTab === 'home';

  useEffect(() => {
    document.body.classList.toggle("bg-active", isBackgroundPicture);
    document.body.classList.toggle("bg-inactive", !isBackgroundPicture);
  }, [isBackgroundPicture]);

  return (
    <>
      <a id="insta" href="https://www.instagram.com/bjarnhallprytz/" target="_blank">
        <img src={instaSvg} alt="Instagram" width="60" height="60" />
      </a>
      <div className="name">
        <h1>Nicklas Bjärnhall Prytz</h1>
      </div>
      <ul className="tabs">
        <TabButton onClick={() => setActiveTab("home")} isSelected={activeTab === "home"}>
          Home
        </TabButton>
        <TabButton onClick={() => setActiveTab("about")} isSelected={activeTab === "about"}>
          About
        </TabButton>
        <TabButton onClick={() => setActiveTab("media")} isSelected={activeTab === "media"}>
          Media
        </TabButton>
        <TabButton onClick={() => setActiveTab("photos")} isSelected={activeTab === "photos"}>
          Photos
        </TabButton>
        <TabButton onClick={() => setActiveTab("contact")} isSelected={activeTab === "contact"}>
          Contact
        </TabButton>
      </ul>
      <div className="App">
        <div className="innerContent">
          {activeTab === "home" && contentHome}
          {activeTab === "about" && contentAbout}
          {activeTab === "contact" && contentContact}
          {activeTab === "media" && contentMedia}
          {activeTab === "photos" && <Gallery />}
        </div>
      </div >
    </>
  );
}

export default App;
