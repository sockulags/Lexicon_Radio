import { IChannel } from '../interface';
import { usePlayState } from '../utils/playStateContext';

import "./Channel.css";

interface ChannelProps {
    props: IChannel;   
}

export function Channel({ props }: ChannelProps) {
    const { isPlaying,  audioSrc,  playAudio, pauseAudio } = usePlayState(); 

    const handleButtonClick = () => { 
         if (isPlaying && audioSrc === props.liveaudio.url) {
            pauseAudio();
           
        } else {
            playAudio(props.liveaudio.url, props.name);             
        }
       
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
                        {isPlaying && audioSrc === props.liveaudio.url ? "pause" : "play_arrow"}
                    </span>
                    Live
                </button>
            </div>
        </div>
    );
}
