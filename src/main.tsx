import React from "react";
import ReactDOM from "react-dom/client";
import { PlayStateProvider } from './context/PlayStateContext';
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>  
    <PlayStateProvider>
    <App />
    </PlayStateProvider>   
  </React.StrictMode>
);
