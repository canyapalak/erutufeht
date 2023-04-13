import { GoUnmute, GoMute } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useState } from "react";

export default function ControlPanel({ muted, setMuted, startText }) {
  const [isInfo, setIsInfo] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
  };

  function handleQuestionClick() {
    setIsInfo(!isInfo);
  }

  return (
    <>
      <div className="p-2 flex flew-row gap-5 items-center">
        <p className="font-watcher text-3xl text-zinc-300 tracking-widest">
          ERUTUFEHT
        </p>

        {startText && (
          <div>
            {!muted ? (
              <GoUnmute
                className="text-zinc-300 text-xl cursor-pointer"
                onClick={toggleMute}
              />
            ) : (
              <GoMute
                className="text-zinc-300 text-xl cursor-pointer"
                onClick={toggleMute}
              />
            )}
          </div>
        )}
        <FaRegQuestionCircle
          className="text-zinc-300 text-xl cursor-pointer"
          onClick={handleQuestionClick}
        />
        {isInfo && (
          <div>
            <p className="text-zinc-300 slide-right ">SPACE??? BACK???</p>
          </div>
        )}
      </div>
    </>
  );
}
