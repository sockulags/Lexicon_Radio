import React from 'react';
import { IPodcast } from '../interface';
import './Podcast.css';

interface PodcastProps{
    props: IPodcast;
}

export function Podcast({props}: PodcastProps) {

    console.log("Podcastprops: ", props);
    return (
        <div className='podcast-container'>
            Content
        </div>
    );
}