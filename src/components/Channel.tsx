import { IChannel } from '../interface';
import { usePlayState } from '../utils/playStateContext';

import "./Channel.css";

interface ChannelProps {
    props: IChannel;   
}

export function Channel({ props }: ChannelProps) {
    const { isPlaying,  audioSrc,  playAudio, pauseAudio } = usePlayState(); 

    const handleButtonClick = () => { 
        console.log(isPlaying);
        console.log(audioSrc);
        console.log(props.liveaudio.url);
        console.log(isPlaying && audioSrc === props.liveaudio.url)
        if (isPlaying && audioSrc === props.liveaudio.url) {
            pauseAudio();
           
        } else {
            playAudio(props.liveaudio.url); 
            
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
