import { useState, useEffect } from 'react';
import { IChannel, IBroadcast, IPodcast } from './interface';
import { Channels } from './components/Channels';
import { LastPublished } from './components/LastPublished';
import { MediaPlayer } from './components/MediaPlayer';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

export function App() {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [lastPublished, setLastPublished] = useState<(IBroadcast | IPodcast)[]>([]); 
  
  useEffect(() => {
    const getChannels = async (): Promise<void> => {
      try {
        const response = await fetch("http://api.sr.se/api/v2/channels?format=json");
        
        if (response.ok) {
          const jsonData = await response.json(); 
          console.log('Parsed JSON:', jsonData.channels);
          setChannels(jsonData.channels);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getChannels();

  }, []);

  useEffect(() => {
    const getLastPublished = async (): Promise<void> => {
      try {
        const response = await fetch("https://api.sr.se/api/v2/lastpublished?audioquality=hi&format=json&size=20");
        
        if (response.ok) {
          const jsonData = await response.json(); 
          console.log('Last Published Data:', jsonData.shows);
          setLastPublished(jsonData.shows);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getLastPublished();
  }, []);

console.log(lastPublished);

  return (
    <Router>
      <Navbar />
      <MediaPlayer/>
      <Routes>
        <Route path="/" element={<LastPublished props={lastPublished}/>}/>
        <Route path="/channels" element={<Channels channels={channels} />} />
      </Routes>
    </Router>
  );
}
