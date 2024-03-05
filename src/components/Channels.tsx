import {useState} from 'react';
import { IChannel } from '../interface';
import { Channel } from './Channel';
import { MediaPlayer } from './MediaPlayer';
import "./Channels.css";

interface ChannelProps {
    channels: IChannel[];
}


export function Channels({ channels }: ChannelProps) {
const [audioSrc, setAudioSrc] = useState<string>("");

const handleAudioToggle = (audio:string) => {
    console.log(audio);
    setAudioSrc(audio);
    }
    
    return (
        <>        
        <div className="channel-list">
            {channels.map(channel => (
                <Channel props={channel} audioToggle={handleAudioToggle} />
            ))}
        </div>
        <MediaPlayer src={audioSrc}/>
        </>
    );
}
