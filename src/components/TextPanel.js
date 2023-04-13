import { useState, useCallback } from "react";
import { splittedText } from "../data/ErutufehtText.js";
import { useEffect } from "react";
import { MdReplay } from "react-icons/md";

export default function TextPanel({
  setStartAudio,
  startText,
  setStartText,
  setReset,
}) {
  const [currentPart, setCurrentPart] = useState(0);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.code === "Space") {
        setStartText(true);
        setStartAudio(true);
      } else if (event.code === "ArrowRight" && currentPart < 60) {
        setCurrentPart(currentPart + 1);
      } else if (event.code === "ArrowLeft" && currentPart > 0) {
        setCurrentPart(currentPart - 1);
      }
    },
    [currentPart, setStartAudio, setStartText]
  );

  function handleResetClick() {
    setReset(true);
  }

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPart, handleKeyDown, setStartAudio, setStartText]);

  return (
    <>
      <div className="flex flex-col">
        {startText && (
          <div>
            <div className="m-10 flex items-center justify-center ">
              {currentPart === 60 ? (
                <div className="fade-in ">
                  <p className="text-zinc-300 font-watcher text-center text-7xl tracking-widest mt-20">
                    ERUTUFEHT
                  </p>
                  <MdReplay
                    className="text-zinc-300 text-4xl text-center mx-auto mt-5 cursor-pointer"
                    onClick={handleResetClick}
                  />
                </div>
              ) : (
                <pre className="text-md text-emerald-300 font-solid text-left w-1/3 opacity-90 fade-in">
                  {splittedText[currentPart]}
                </pre>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
