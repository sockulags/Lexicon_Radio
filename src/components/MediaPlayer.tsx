import React, { useState, useRef } from "react";
import { usePlayState } from '../utils/playStateContext'; 
import "./MediaPlayer.css";

interface MediaPlayerProps {
    src: string;
}

export function MediaPlayer({ src }: MediaPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { isPlaying, togglePlayState } = usePlayState();

    const [isMute, setIsMute] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.5);
   
    const handlePlayState = () => {
        console.log(audioRef.current?.src)
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            togglePlayState(); 
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
            <audio ref={audioRef} autoPlay={isPlaying} src={src} />

            <span className="material-symbols-outlined" onClick={handlePlayState}>
                {isPlaying ? "pause" : "play_arrow"}
            </span>

            <span className="material-symbols-outlined" onClick={handleMuteState}>
                {isMute ? "volume_off" : volume >= 0.5 ? "volume_up" : "volume_down"}
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