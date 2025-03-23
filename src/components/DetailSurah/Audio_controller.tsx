import { Pause, Play } from "lucide-react";

type AudioControlProps = {
  currentReciter: string;
  audioPlaying: boolean;
  changeReciter: (reciterId: string) => void;
  onPlay: () => void;
  onPause: () => void;
};

function AudioControl({
  currentReciter,
  changeReciter,
  audioPlaying,
  onPlay,
  onPause,
}: AudioControlProps) {
  const reciters = [
    { id: "01", name: "Abdullah Al-Juhany" },
  
  ];

  return (
    <div className="flex justify-between gap-4 items-center">
      <select
        value={currentReciter}
        onChange={(e) => changeReciter(e.target.value)}
        className="bg-dark-colore text-light-colore p-3 w-full rounded-lg"
      >
        {reciters.map((reciter) => (
          <option key={reciter.id} value={reciter.id}>
            {reciter.name}
          </option>
        ))}
      </select>

      <div
        className="bg-primary-colore p-1  rounded-full flex flex-col justify-center items-center cursor-pointer"
        onClick={audioPlaying ? onPause : onPlay}
      >
        {audioPlaying ? (
          <Pause className="w-fit h-fit text-light-colore" />
        ) : (
          <Play className="w-fit h-fit text-light-colore" />
        )}
      </div>
    </div>
  );
}

export default AudioControl;
