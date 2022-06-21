import {Container, Price, Hr, DivInfo, Info, BuyButton} from "./styles.jsx"

export default function BuyCar({ name, price, color, description, potency, about, photo,  }) {
    return (
        <>
            <Container>
                <div>
                    <img src={photo} alt="" />
                    <h1 className="text-3xl">{name}</h1>
                    <p>Apartir de:</p>
                    <Price>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
                </div>
                    <Hr/>
                <DivInfo>
                    <h3>cor: <Info>{color}</Info></h3>
                    <h4>Potência: <Info>{potency}</Info></h4>
                    <h5>Descrição: <Info>{description}</Info> </h5>
                    <h6>Sobre: <Info>{about}</Info> </h6>
                    <BuyButton>COMPRAR AGORA</BuyButton>
                </DivInfo>
            </Container>
        </>

    )
}