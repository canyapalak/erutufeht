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
  const isLastPart = currentPart === 30;

  console.log("splittedText", splittedText);

  return (
    <>
      <div className="p-10 text-justify   ">
        <p className="text-lg text-green-400 font-trump">
          {splittedText[currentPart]}
        </p>
      </div>
      <div className="flex flex-row justify-around mt-5">
        {!isFirstPart && (
          <button
            onClick={handleBackClick}
            className=" bg-emerald-300 rounded-md p-1 shadow-md font-trump text-lg"
          >
            BACK
          </button>
        )}
        {!isLastPart && (
          <button
            onClick={handleNextClick}
            className=" bg-emerald-300 rounded-md p-1 shadow-md font-trump text-lg"
          >
            NEXT
          </button>
        )}
      </div>
    </>
  );
}
