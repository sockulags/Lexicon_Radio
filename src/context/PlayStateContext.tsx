import React, { useState, createContext, ReactNode } from 'react';

interface PlayStateContextType {
    isPlaying: boolean;
    audioSrc: string;
    channelName: string;
    playAudio: (audioSrc: string, name:string) => void;
    pauseAudio: () => void;
}

export const PlayStateContext = createContext<PlayStateContextType>({
    isPlaying: false,
    audioSrc: "", 
    channelName: "",
    playAudio: () => {},
    pauseAudio: () => {},
});



interface PlayStateProviderProps {
    children: ReactNode;
}

export const PlayStateProvider: React.FC<PlayStateProviderProps> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioSrc, setAudioSrc] = useState<string>("");
    const[channelName, setChannelName]  = useState<string>("");

    const playAudio = (audioSrc: string, name: string) => {
        setIsPlaying(true);
        setAudioSrc(audioSrc);
        setChannelName(name);
    };

    const pauseAudio = () => {
        setIsPlaying(false);
    };

    return (
        <PlayStateContext.Provider value={{ isPlaying, audioSrc, playAudio, pauseAudio, channelName }}>
            {children}
        </PlayStateContext.Provider>
    );
};