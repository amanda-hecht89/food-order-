import './App.css';
import { useState } from 'react';
import DrinkDropDown from './DrinkDropDown/DrinkDrop';
import FoodDropDown from './FoodDropDown/FoodDrop';
import SideDropDown from './SideDropDown/SideDrop';
import Meal from './Food';



function App() {

  const [foodId, setFoodId] = useState('food-1');
  const [drinkId, setDrinkId] = useState('drink-1');
  const [sideId, setSideId] = useState('side-1');

  return (
    <div className="App">
      <section className='dropdown'>
        <header>
          <h1>
            WELCOME TO THE KRUSTY KRAB!
          </h1>
        </header>
        <hr />
        <FoodDropDown setFoodId={setFoodId} />
        <DrinkDropDown setDrinkId={setDrinkId} />
        <SideDropDown setSideId={setSideId} />
      </section>
      <Meal food={foodId} side={sideId} drink={drinkId} />
      <hr />
      <div>
        <img src={'./images/squidward.png'} height='150' />
        What do you want to eat.......
        <img src={'./images/krabs-2.png'} height='150' />
        YAY MONEY!
      </div>
      <hr />
      <div>
        <img src={'./images/plankton.png'} height='150' />
        Tell me your name!!!!
      </div>
      <hr />
      <div>
        <img src={'./images/orderup.png'} height='150' />
        ORDER UP!!!!!!
      </div>
      
    </div>
  );
}

export default App;
