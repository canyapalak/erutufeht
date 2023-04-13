import "./App.css";
import { useState, useEffect } from "react";
import TextPanel from "./components/TextPanel";
import Background from "./assets/001.mp4";
import AmbientSound from "./assets/ambient-sound.mp3";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const [audio] = useState(new Audio(AmbientSound));
  const [muted, setMuted] = useState(false);
  const [startAudio, setStartAudio] = useState(false);
  const [startText, setStartText] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.muted = muted;
    audio.play();
    return () => {
      audio.currentTime = 0;
    };
  }, [audio, muted, startAudio]);

  reset && window.location.reload();

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
          <ControlPanel
            muted={muted}
            setMuted={setMuted}
            startText={startText}
          />
          <TextPanel
            setStartAudio={setStartAudio}
            setStartText={setStartText}
            startText={startText}
            setReset={setReset}
          />
        </div>
      </div>
    </div>
  );
}
