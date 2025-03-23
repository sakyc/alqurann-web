import  {useState, useEffect } from 'react'
import type { Surah } from '../../types/type'
import List_surah from './List_surah';

const Container_surah = () => {
    let [surah, setSurah] = useState<Surah[]>([]);
    let [search, setSearch] = useState('');
    // let [isLoading, setIsLoading] = useState(true);
    // let [error, setError] = useState(null);
    useEffect(() => {
        async function getSurah() {
                try {
                    let response = await fetch('https://equran.id/api/v2/surat');
                    let data = await response.json();
                    console.log(data.data.length);
                    setSurah(data.data);
                }
                catch (error) {
                    console.log(error);
                }
        }
        getSurah();
    }, [])

    let dataFiltered = surah.filter(data => data.namaLatin.toLowerCase().includes(search));
    
    return (
    
    <div>
        <input 
            type="text"
            placeholder="Cari surah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-7  border-b-light-colore border-b-1 rounded-lg focus:outline-none center text-white block mx-auto "
        />
        
        <List_surah data_surah={dataFiltered} />
    </div>
    
    )
    }

export default Container_surah