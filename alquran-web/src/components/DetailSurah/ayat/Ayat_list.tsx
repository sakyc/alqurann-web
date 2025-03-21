import type { Ayat } from "../../types/type";
import AyatCard from "./Ayat_card";

type AyatListProps = {
  ayat: Ayat[];
};

function AyatList({ ayat }: AyatListProps) {
  return (
    <div className="flex flex-col gap-3">
      {ayat.map((item) => (
        <AyatCard key={item.nomorAyat} ayat={item} />
      ))}
    </div>
  );
}

export default AyatList;
