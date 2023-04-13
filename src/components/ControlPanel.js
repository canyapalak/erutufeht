import { GoUnmute, GoMute } from "react-icons/go";

export default function ControlPanel({ muted, setMuted }) {
  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <div className="p-2 flex flew-row gap-5 items-center">
        <p className="font-watcher text-3xl text-zinc-300 tracking-widest">
          ERUTUFEHT
        </p>

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
    </>
  );
}
