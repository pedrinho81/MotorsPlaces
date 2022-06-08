import {cars} from "../../assets/utils/car"

export default function Home() {
    return(
        <div>
            <p>Olá</p>
            {cars.map((car) => {
                <h1>{car.name}</h1>
            })}
        </div>
    )
}

