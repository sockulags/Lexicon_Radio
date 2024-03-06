import React, { useState, useRef, useEffect } from "react";
import { usePlayState } from '../utils/playStateContext'; 
import "./MediaPlayer.css";

export function MediaPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { isPlaying, playAudio, pauseAudio, audioSrc } = usePlayState();

    const [isMute, setIsMute] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.5);   


    useEffect(() => {
        if(isPlaying) {
            audioRef.current?.play();
        } else{
            audioRef.current?.pause();
        }
    })

    const handlePlayState = () => {
        console.log(audioRef.current)
        if (audioRef.current) {
            if (isPlaying) {           
                pauseAudio();
            } else {
                audioRef.current.src = audioSrc;             
                playAudio(audioSrc);
            }
        }
    };

    const handleMuteState = () => {
        setIsMute(!isMute);
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="mediaplayer-container">
            <audio ref={audioRef} autoPlay={isPlaying} src={audioSrc} />

            <span className="material-symbols-outlined" onClick={handlePlayState}>
                {isPlaying ? "pause" : "play_arrow"}
            </span>

            <span className="material-symbols-outlined" onClick={handleMuteState}>
                {isMute || volume === 0 ? "volume_off" : volume >= 0.5 ? "volume_up" : "volume_down"}
            </span>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />

            <span className="time-control">
                <span className="current-time">0:00</span>/
                <span className="end-time">12:45</span>{" "}
            </span>
        </div>
    );
}