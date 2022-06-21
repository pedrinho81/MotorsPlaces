// importar "carroFoto" from "../images/arquivo baixado"
import Camaro from "../images/camaro.png"
import Mercedes from "../images/Mercedes.png"
import Bmw from "../images/bmw.png"
import Toyota from "../images/Toyota.png"
import Dodge from "../images/dodge.png"


const cars = [
    {
        id: 1,
        name: "Chevrolet Camaro SS",
        description:"6.2 V8 GASOLINA SS",
        potency:"461 HP",
        price: 195900,
        color: "Amarelo",
        photo: Camaro,
        path:"/camaro",
        about:"Ar condicionado Retrovisores elétricos Rodas de liga leve Retrovisor fotocrômico volante com regulagem de altura Bancos em couro"
        
    },
    {
        id: 2,
        name: "Mercedes-Benz GLB",
        description:"Motor em linha",
        potency:"1.680 - 1.805 l",
        price: 283900,
        color:"Branco",
        photo: Mercedes,
        path:"/voyage",
        about: "O Mercedes-Benz GLB 200 é um SUV compacto com capacidade para levar até 7 ocupantes. Ele é vendido em versão única Launch Edition até o momento, é movido pelo motor 1.3 turbo - fabricado em parceria com a Renault - que rende 163 cv e 25,5 kgfm de torque, aliado ao câmbio automático DCT de sete marchas."
    },

    {
        id: 3,
        name: "BMW Série 2",
        description: "Sedan, Coupê",
        potency: "L x 1.410-1.420 mm A",
        price: 300950,
        color: "Azul",
        photo: Bmw,
        path:"/bmw",
        about: "Não só um coupé típico, mas uma experiência incrível: o primeiro BMW Série 2 Gran Coupé introduz uma nova forma de autoridade, com um caráter ousado no segmento dos veículos compactos. Acima de tudo, uma estética sem compromissos voltada para o desempenho que sem dúvidas revela suas ambições."
    },

    {
        id: 4,
        name: "Caminhonete Toyota Hilux",
        description:"Power Pack 4x4 Man",
        potency:"204/3.400 cv/rpm. ",
        price: 151900,
        color: "Vermelho",
        photo: Toyota,
        path:"/monza",
        about: "Rodas de aço estampado aro 17, protetor de caçamba, maçanetas externas pretas, para-barros dianteiro e traseiro, para-choque dianteiro na cor do carro, para-brisa degradê. Console entre os bancos dianteiros com porta-copos, porta-objetos e descansa-braços, revestimento dos bancos e assoalho em material sintético, maçanetas internas pretas, porta-objetos nas portas e sob o banco traseiro."
    },

    {
        id: 5,
        name: "Dodge Challenger R/T",
        description:"5.7 R/T HEMI V8",
        potency:"Torque 89,8 kgfm a 4000",
        price: 105990,
        color: "Preto",
        photo: Dodge,
        path:"/dodge",
        about:"Essa máquina consegue fazer de 0 a 100 km/h em aproximadamente 3,25 segundos e sua velocidade máxima pode chegar até 270 km/h. Os testes na pista de drag race apontaram que o SRT consegue percorrer um quarto de milha (400 m) em 10,5 segundos, atingindo até 210 km/h."
    },
    {
        id: 6,
        name: "BMW Série 2",
        description: "Sedan, Coupê",
        potency: "L x 1.410-1.420 mm A",
        price: 300950,
        photo: Bmw,
        path:"/bmw"
    },
    {
        id: 7,
        name: "Mercedes-Benz GLB",
        description:"Motor em linha",
        potency:"1.680 - 1.805 l",
        price: 283900,
        photo: Mercedes,
        path:"/voyage"
    },
    {
        id: 8,
        name: "Dodge Challenger R/T",
        description:"GASOLINA 2P",
        potency:"Torque 89,8 kgfm a 4000",
        price: 25990,
        photo: Dodge,
        path:"/dodge"
    },
    {
        id: 9,
        name: "Chevrolet Camaro SS",
        description:"6.2 V8 GASOLINA SS",
        potency:"461 HP",
        price: 195900,
        photo: Camaro,
        path:"/camaro"
    },
    {
        id: 10,
        name: "Caminhonete Toyota Hilux",
        description:"Power Pack 4x4 Man",
        potency:"204/3.400 cv/rpm. ",
        price: 151900,
        photo: Toyota,
        path:"/monza"
    },
]

export default cars