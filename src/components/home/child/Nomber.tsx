type NomberPrips = {
    number: number
}

let Nomber = ({number}: NomberPrips) => {
    return (
        <div className="flex justify-center items-center rounded-full bg-accent-light-colore p-4 w-6 h-6 ">
            <p className="text-light-colore font-semibold text-xs">{number}</p>
        </div>
    )
}

export default Nomber