import React from 'react';
import { IChannel } from '../interface';
import { Channel } from './Channel';
import "./Channels.css";

interface ChannelProps {
    channels: IChannel[];
}

export function Channels({ channels }: ChannelProps) {
    return (
        <div className="channel-list">
            {channels.map(channel => (
                <Channel props={channel} />
            ))}
        </div>
    );
}
