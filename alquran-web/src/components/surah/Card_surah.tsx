import { Surah } from "../../type";
import Nomber from "../home/child/Nomber";

type cardSurahProps = {
    surah: Surah
}

const Card_surah = ({surah}: cardSurahProps) => {
    return (
        <div className="flex w-full justify-between bg-dark-colore rounded-2xl p-4">
            <div className="text-light-colore flex flex-row gap-4">
                <Nomber number={surah.nomor} />
                <div className="">
                    <p className="font-bold">{surah.namaLatin}</p>
                    <h1 className="text-subtle-colore text-sm">{surah.arti}</h1>
                    <h2 className="text-subtle-colore text-sm">{surah.tempatTurun} - {surah.jumlahAyat} Ayat</h2>
                </div>
            </div>
            <h1 className="text-accent-light-purple-colore font-bold ">{surah.nama}</h1>
        </div>
    )
}

export default Card_surah