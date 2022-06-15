import './App.css';
import { useState } from 'react';
import DrinkDropDown from './DrinkDropDown/DrinkDrop';
import FoodDropDown from './FoodDropDown/FoodDrop';
import SideDropDown from './SideDropDown/SideDrop';
import Meal from './Food';
import backgroundImg from './background2.jpg';
import OrderNameInput from './OrderNameInput';
import InstructionsForm from './Instructions/InstructionsForm';
import InstructionsList from './Instructions/InstructionsList';



function App() {

  const [foodId, setFoodId] = useState('food-1');
  const [drinkId, setDrinkId] = useState('drink-1');
  const [sideId, setSideId] = useState('side-1');
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header>
        <h1>
          <img className='patty' src={'./images/krustykrab.png'} height='110' />
            WELCOME TO THE KRUSTY KRAB!
          <img className='patty' src={'./images/krustykrab.png'} height='110' />
        </h1>
      </header>
      <hr />
      <section className='dropdown'>
        <FoodDropDown setFoodId={setFoodId} />
        <DrinkDropDown setDrinkId={setDrinkId} />
        <SideDropDown setSideId={setSideId} />
      </section>
      <div className='everythingelse'>

        <Meal food={foodId} side={sideId} drink={drinkId} />
        <hr />
        <div className='special'>
          <img src={'./images/squidward.png'} height='110' />
          <p>
        What do you want to eat.......
          </p>
          < hr />
          <InstructionsForm setInstructions={setInstructions} instructions={instructions}/>
          <hr /><img src={'./images/krabs-2.png'} height='110' />
          <p>
        YAY MONEY!
          </p><hr />
          <InstructionsList instructions={instructions}/>
        </div>
        <hr />
        <div className='name'>
          <img src={'./images/plankton.png'} height='100' />
          <OrderNameInput setOrderName={setOrderName} />
        </div>
        <hr />
        <div className='order'>
          <img src={'./images/orderup2.png'} height='100' />
          <p>
          ORDER UP {orderName}!!!!!!
          </p>
        </div>
      </div>
      
    </div>
  );
}


export default App;
