type versetype = {
    verseTranslate: string,
    surah: string
}

function Verse({verseTranslate, surah}: versetype) {
    return (
        <div className="bg-[url('assets/VerseBackgroundImage.png')] rounded-2xl bg-cover bg-no-repeat p-4 min-h-[155px] min-w-[320px] flex flex-col justify-between">
            <div className="">
                <p className="text-xs text-light-colore font-light mb-2">📖 Your daily verse</p>
                <p className="text-base text-light-colore font-semibold md:text-xl">{verseTranslate}</p>
            </div>
            <p className="text-xs text-light-colore font-light mt-3">{surah}</p>
        </div>
    )
}

export default Verse