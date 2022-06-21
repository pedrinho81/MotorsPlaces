import Cars from '../assets/utils/car'  
import '../index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from '../Components/Header';
import CarList from '../Components/CarList';
import BuyCar from '../Components/BuyCar';

console.log(Cars[0].path)



export default function Router() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<CarList />}></Route>
        {Cars.map(car => {
          return(
            <Route key={car.id} path={car.path} 
            element={<BuyCar 
              name={car.name}
              price={car.price}
              color={car.color}
              description={car.description}
              potency={car.potency}
              about={car.about}
              photo={car.photo} 
              />}></Route>
          )
        })}   
      </Routes>
    </BrowserRouter>
  )
}

