import  { useState } from 'react';
import { IChannel } from '../interface';
import { usePlayState } from '../utils/playStateContext';

import "./Channel.css";

interface ChannelProps {
    props: IChannel;
    audioToggle: (audio: string) => void;
}

export function Channel({ props, audioToggle }: ChannelProps) {
    const { isPlaying, togglePlayState } = usePlayState(); 

    const [isLocalPlaying, setLocalPlaying] = useState<boolean>(false); 

    const handleButtonClick = () => {
        audioToggle(props.liveaudio.url); 
        setLocalPlaying(!isLocalPlaying); 
        togglePlayState(); 
    };

    return (
        <div className="channel-container">
            <div className='image-container' style={{ backgroundColor: `#${props.color}` }}>
                <img src={props.image} />
            </div>
            <div className="text-container">
                <h2>{props.name} - {props.channeltype}</h2>
                <p>{props.tagline}</p>
                <button className="play-btn" onClick={handleButtonClick}>
                    <span className="material-symbols-outlined">
                        {isPlaying ? "pause" : "play_arrow"}
                    </span>
                    Live
                </button>
            </div>
        </div>
    );
}
