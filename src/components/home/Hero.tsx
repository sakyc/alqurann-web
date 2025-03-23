import Home_profile_top from "./child/Profile_top"
import Verse from "./child/Verse"
import imgProfile from "../../assets/img.jpeg"

let Hero = () => {
    return (
        <div className="relative mb-20">
            <div className="bg-[url('assets/HeroBackgroundImage.png')] bg-cover bg-no-repeat w-full h-55 rounded-b-2xl">
                <div className="relative flex flex-col gap-8 px-5 pt-8">
                    <Home_profile_top name="Rifki Muhammad Fadhil" greeting="Good Morning" img={imgProfile}/>
                    <Verse  
                    verseTranslate="
                    “He said: ‘There you shall live, and therein you shall die, 
                    and from it you shall be brought out (i.e. resurrected).’”
                    " 
                    surah="Al-A’raaf (7:25)"/>
                </div>
            </div>
        </div>
    )
}

export default Hero