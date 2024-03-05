import React, { useState, createContext, useContext, ReactNode } from 'react';

interface PlayStateContextType {
    isPlaying: boolean;
    togglePlayState: () => void;
}

export const PlayStateContext = createContext<PlayStateContextType>({
    isPlaying: false,
    togglePlayState: () => {},
});

export const usePlayState = () => useContext(PlayStateContext);

interface PlayStateProviderProps {
    children: ReactNode;
}

export const PlayStateProvider: React.FC<PlayStateProviderProps> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const togglePlayState = () => {
        setIsPlaying(prevState => !prevState);
    };

    return (
        <PlayStateContext.Provider value={{ isPlaying, togglePlayState }}>
            {children}
        </PlayStateContext.Provider>
    );
};
