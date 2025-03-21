import { Surah } from "../../types/type";
import Nomber from "../child/Nomber";
import { Link } from "react-router-dom";

type cardSurahProps = {
    surah: Surah
}

const Card_surah = ({surah}: cardSurahProps) => {
    return (
        <Link to={`/surah/${surah.nomor}`}>
            <div className="flex w-full justify-between bg-dark-colore rounded-2xl p-4" onClick={() => console.log(surah.nomor)}>
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
        </Link>
        
    )
}

export default Card_surah