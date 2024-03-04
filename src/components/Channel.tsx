import React from 'react';
import { IChannel } from '../interface';
import "./Channel.css";

interface ChannelProps{
    props: IChannel;
}

export function Channel( {props} : ChannelProps) {
  return (
    <div className="channel-container">
        <div className='image-container' style={{backgroundColor:`#${props.color}`}}><img src={props.image}/></div>
        <div className="text-container">
        <h2>{props.name} - {props.channeltype}</h2>
        <p>{props.tagline}</p>
        <button className="play-btn" onClick={() => console.log("Play")}><span className="material-symbols-outlined">
play_arrow
</span>Live</button>
</div>
    </div>
  );
}

