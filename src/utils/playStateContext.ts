import { useContext } from 'react';
import { PlayStateContext } from '../context/PlayStateContext';

export const usePlayState = () => useContext(PlayStateContext);