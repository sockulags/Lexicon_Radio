import React from 'react';
import { IPodcast } from '../interface';
import { usePlayState } from '../utils/playStateContext';
import './Podcast.css';

interface PodcastProps{
    props: IPodcast;
}

export function Podcast({props}: PodcastProps) {
    const { isPlaying,  audioSrc,  playAudio, pauseAudio } = usePlayState(); 

    const handleButtonClick = () => { 
         if (isPlaying && audioSrc === props.listenpodfile.url) {
            pauseAudio();
           
        } else {
            playAudio(props.listenpodfile.url, props.title);             
        }
       
    };

    console.log('Podcast:', props);
    return (
        <div className='broadcast-card'>        
           
            <div className='image-container'>
                <img src={props.imageurl} alt={props.title} />
            </div>
            <h2>{props.title}</h2>
            <button className="play-btn" onClick={handleButtonClick}>
                    <span className="material-symbols-outlined">
                        {isPlaying && audioSrc === props.listenpodfile.url ? "pause" : "play_arrow"}
                    </span>
                    Spela upp
                </button>
        </div>
    );
}