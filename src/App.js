import './App.css';
import { useState } from 'react';
import DrinkDropDown from './DrinkDropDown/DrinkDrop';
import FoodDropDown from './FoodDropDown/FoodDrop';
import SideDropDown from './SideDropDown/SideDrop';
import Meal from './Food';
import backgroundImg from 'background.jpg';


function App() {

  const [foodId, setFoodId] = useState('food-1');
  const [drinkId, setDrinkId] = useState('drink-1');
  const [sideId, setSideId] = useState('side-1');

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <section className='dropdown'>
        <FoodDropDown setFoodId={setFoodId} />
        <DrinkDropDown setDrinkId={setDrinkId} />
        <SideDropDown setSideId={setSideId} />
      </section>
      <Meal food={foodId} side={sideId} drink={drinkId} />
      
    </div>
  );
}

export default App;
