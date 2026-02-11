import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myImage from './assets/pressbild_NBP.jpeg';

import { useRef } from 'react';

import { useEffect } from 'react';

import music from './assets/lohengrin.mp3'  // Your music file path

function App() {

  const audioRef = useRef(null);

  useEffect(() => {
    // Play the audio when the page loads
    audioRef.current.play().catch((error) => {
      console.error('Audio play failed: ', error);
    });
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Audio play failed: ', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`App ${isPlaying ? 'clicked' : ''}`}>
      <header className="App-header">
        <h1>Nicklas Bjärnhall Prytz</h1>
      </header>

      <img className={`centered-image ${isPlaying ? 'clicked' : ''}`} src={myImage} alt="My Example" />

      <button onClick={toggleMusic}>Play</button>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

  export default App;
