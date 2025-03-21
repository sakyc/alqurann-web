type profileProps = {
    greeting: string;
    name: string;
    img: string;
}

const Home_profile_top = ({greeting, name, img}: profileProps) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="font-extralight text-light-colore text-sm">{greeting}</p>
                <h1 className="font-semibold text-light-colore">{name}</h1>
            </div>
            <img src={img} alt="" className="w-10 h-10 rounded-full"/>
        </div>
    )
}

export default Home_profile_top