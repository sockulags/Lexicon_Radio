import { IChannel } from '../interface';
import { Channel } from './Channel';
import { MediaPlayer } from './MediaPlayer';
import "./Channels.css";

interface ChannelProps {
    channels: IChannel[];
}


export function Channels({ channels }: ChannelProps) {


    return (
        <>        
        <div className="channel-list">
            {channels.map(channel => (
                <Channel props={channel} />
            ))}
        </div>
        <MediaPlayer/>
        </>
    );
}
