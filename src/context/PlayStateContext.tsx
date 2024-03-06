import React, { useState, createContext, ReactNode } from 'react';

interface PlayStateContextType {
    isPlaying: boolean;
    audioSrc: string;
    playAudio: (audioSrc: string) => void;
    pauseAudio: () => void;
}

export const PlayStateContext = createContext<PlayStateContextType>({
    isPlaying: false,
    audioSrc: "", 
    playAudio: () => {},
    pauseAudio: () => {},
});



interface PlayStateProviderProps {
    children: ReactNode;
}

export const PlayStateProvider: React.FC<PlayStateProviderProps> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioSrc, setAudioSrc] = useState<string>("");

    const playAudio = (audioSrc: string) => {
        setIsPlaying(true);
        setAudioSrc(audioSrc);
    };

    const pauseAudio = () => {
        setIsPlaying(false);
    };

    return (
        <PlayStateContext.Provider value={{ isPlaying, audioSrc, playAudio, pauseAudio }}>
            {children}
        </PlayStateContext.Provider>
    );
};