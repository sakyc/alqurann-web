import type { Ayat } from "../../types/type";
import Number from "../../home/child/Nomber";

type AyatCardProps = {
  ayat: Ayat;
};

function AyatCard({ ayat }: AyatCardProps) {
  return (
    <div className="bg-dark-colore p-4 rounded-lg text-light-colore text-left flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <Number number={ayat.nomorAyat} />
        <p className="font-light text-3xl text-right w-full font-[Amiri]">{ayat.teksArab}</p>
      </div>
      <p className="font-sm text-light-colore">{ayat.teksLatin}</p>
      <p className="font-sm text-subtle-colore ">{ayat.teksIndonesia}</p>
    </div>
  );
}

export default AyatCard;
