import { Surah } from "../../type";
import Card_surah from "./Card_surah";

type surahListProps = {
    data_surah: Surah[]
}

const List_surah = ({data_surah}: surahListProps) => {
    return (
        <div className="flex flex-col gap-3 px-5">
            {data_surah.map((d_surah, index) => (
                <Card_surah key={index} surah={d_surah} />
                ))
            }
            
        </div>
    )
}

export default List_surah