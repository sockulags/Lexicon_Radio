import React from 'react';
import { IBroadcast } from '../interface';
import { usePlayState } from '../utils/playStateContext';
import './Broadcast.css';

interface BroadcastProps{
    props: IBroadcast;
}

export function Broadcast({props}: BroadcastProps) {
    const { isPlaying,  audioSrc,  playAudio, pauseAudio } = usePlayState(); 

    const handleButtonClick = () => { 
         if (isPlaying && audioSrc === props.broadcast.broadcastfiles[0].url) {
            pauseAudio();
           
        } else {
            playAudio(props.broadcast.broadcastfiles[0].url, props.program.name);             
        }
       
    };

    console.log('Broadcast:', props);
    return (
        <div className='broadcast-card'>          
           
            <div className='image-container'>
                <img src={props.imageurl} alt={props.program.name} />
            </div>
            <h2>{props.program.name}</h2>
            <button className="play-btn" onClick={handleButtonClick}>
                    <span className="material-symbols-outlined">
                        {isPlaying && audioSrc === props.broadcast.broadcastfiles[0].url ? "pause" : "play_arrow"}
                    </span>
                    Spela upp
                </button>
        </div>
    );
}