import { useState } from "react";
import { splittedText } from "../data/ErutufehtText.js";

export default function TextPanel() {
  const [currentPart, setCurrentPart] = useState(0);

  function handleNextClick() {
    setCurrentPart(currentPart + 1);
  }

  function handleBackClick() {
    setCurrentPart(currentPart - 1);
  }

  const isFirstPart = currentPart === 0;
  const isLastPart = currentPart === 48;

  console.log("splittedText", splittedText);

  return (
    <>
      <div className="m-10 flex items-center justify-center ">
        <pre className="text-lg text-emerald-300 font-trump text-left w-1/3 opacity-90">
          {splittedText[currentPart]}
        </pre>
      </div>
      <div className="flex flex-row justify-around mt-5 gap-5">
        {!isFirstPart && (
          <button
            onClick={handleBackClick}
            className=" bg-emerald-300 rounded-md p-1 shadow-md font-trump text-lg"
          >
            GERI
          </button>
        )}
        {!isLastPart && (
          <button
            onClick={handleNextClick}
            className=" bg-emerald-300 rounded-md p-1 shadow-md font-trump text-lg"
          >
            ILERI
          </button>
        )}
      </div>
    </>
  );
}
