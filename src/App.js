import { useState, useEffect } from "react";
import "./App.css";
import TextPanel from "./components/TextPanel";
import Background from "./assets/001.mp4";
import AmbientSound from "./assets/ambient-sound.mp3";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const [audio] = useState(new Audio(AmbientSound));
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.muted = muted;
    audio.play();
    return () => {
      audio.currentTime = 0;
    };
  }, [audio, muted]);

  return (
    <div className="App">
      <div className="relative h-screen w-screen">
        <video
          src={Background}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative">
          <ControlPanel muted={muted} setMuted={setMuted} />
          <TextPanel />
        </div>
      </div>
    </div>
  );
}
