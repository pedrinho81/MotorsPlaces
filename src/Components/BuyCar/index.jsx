export default function BuyCar({ name, price, color, description, potency, about, photo }) {
    return (
        <>
            <div className="sm:flex ml-2">
                <div className="">
                    <img src={photo} alt="" />
                    <h1 className="text-3xl">{name}</h1>
                    <p>Apartir de:</p>
                    <h2 className="text-3xl underline">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                </div>
                    <hr className="my-4 sm:hidden"/>
                <div className="mt-8 border-[1.5px] p-2 flex justify-evenly flex-col rounded-lg text-zinc-300 bg-gray-900">
                    <h3>cor: <span className="text-xl text-zinc-100 underline">{color}</span></h3>
                    <h4>Potência: <span className="text-xl text-zinc-100 underline">{potency}</span></h4>
                    <h5>Descrição: <span className="text-xl text-zinc-100 underline">{description}</span> </h5>
                    <h6>Sobre: <span className="text-xl text-zinc-100 underline">{about}</span> </h6>
                    <button className="bg-green-600 my-2 text-white font-semibold p-2 hover:bg-green-900 transition-colors w-[50%] mx-auto rounded-lg">COMPRAR AGORA</button>
                </div>
            </div>
        </>

    )
}