import { useState, useEffect } from 'react';
import { IChannel } from './interface';
import { Channels } from './components/Channels';
import { Navbar } from './components/Navbar';

import "./index.css";

export function App() {
  const[channels, setChannels] = useState<IChannel[]>([]);
  useEffect(() => {
    const getChannels = async (): Promise<void> => {
      try {
        const response = await fetch("http://api.sr.se/api/v2/channels?format=json", {
          
        });
        
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

  console.log(channels);

  return (
    <>
    <Navbar/>
    <Channels channels={channels}/>
     </>
  )
}
