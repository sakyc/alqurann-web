import type { Surah } from "../types/type";
import DetailSurahInfo from "./DetailSurahInfo";
import AudioControl from "./Audio_controller";
import AyatList from "./ayat/Ayat_list";

type DetailSurahProps = {
  surah: Surah;
  currentReciter: string;
  changeReciter: (reciterId: string) => void;
  onPlay: () => void;
  onPause: () => void;
  audioPlaying: boolean;
};

function DetailSurah({
  surah,
  currentReciter,
  changeReciter,
  onPlay,
  onPause,
  audioPlaying,
}: DetailSurahProps) {
  return (
    <div className="py-8 px-5 flex flex-col gap-5">
      <DetailSurahInfo surah={surah} />

      <AudioControl
        currentReciter={currentReciter}
        changeReciter={changeReciter}
        onPlay={onPlay}
        onPause={onPause}
        audioPlaying={audioPlaying}
      />

      <AyatList ayat={surah.ayat} />
    </div>
  );
}

export default DetailSurah;
