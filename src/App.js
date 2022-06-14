import './App.css';
import { useState } from 'react';
import drinkDropDown from './drinkDropDown/drinkDrop';
import FoodDropDown from './foodDropDown/foodDrop';
import sideDropDown from './sideDropDown/sideDrop';
import Meal from './food';


function App() {

  const [foodId, setFoodId] = useState('food-1');
  const [drinkId, setDrinkId] = useState('drink-1');
  const [sideId, setSideId] = useState('side-1');

  return (
    <div className="App">
      <Meal food={foodId} side={sideId} drink={drinkId} />

      <section className='dropdown'>
        <FoodDropDown setFoodId={setFoodId} />
        <FoodDropDown setDrinkId={setDrinkId} />
        <FoodDropDown setSideId={setSideId} />
      </section>
      
    </div>
  );
}

export default App;
