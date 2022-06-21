import Cars from "../../assets/utils/car"
import CarImg from "../../assets/images/camaro.png"
import HeartIcon from "../../assets/images/coracao (1).png"
import CartIcon from "../../assets/images/CartIcon1.png"
import CarIcon from "../../assets/images/carIcon.png"
import { Link } from "react-router-dom"
import { ContainerCard, DivImg, DivIcon, Icon, DivInfo, DivInfoLeft, Name, Info, DivFooter, DivInfoRight, Symbol, Price, Miles } from "./styles"
export default function CarList() {

    return (
        <>
            <div className="flex justify-center gap-2">
            <img src={CarIcon} className="my-auto" alt="" />
                <h1 className="text-4xl font-serif my-auto">Carros disponíveis 👇</h1>
            </div>
            <div className="flex flex-wrap">
               
                {Cars.map(car => {
                    return (
                        <ContainerCard>
                            <DivImg>
                                <DivIcon>
                                    <Icon src={HeartIcon} />
                                </DivIcon>
                                <img src={car.photo} className="my-10" />
                                
                            </DivImg>
                            <DivInfo>
                                <DivInfoLeft>
                                    <Name>{car.name}</Name>
                                    <Info>{car.description}</Info>
                                    <Info>{car.potency}</Info>
                                </DivInfoLeft>
                                <DivInfoRight>
                                    <Price>{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
                                    <Miles>21,826 mi</Miles>
                                </DivInfoRight>
                            </DivInfo>
                            <Link to={car.path}>
                            <DivFooter>
                                <img src={CartIcon} className="my-auto" /><span className="my-auto"> Comprar agora</span>
                            </DivFooter>
                            </Link>
                            
                        </ContainerCard>
                    )

                })}
            </div>
        </>
    )
}