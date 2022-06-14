import React from 'react';
import './FoodDrop.css';

export default function FoodDropDown({ setFoodId }) {
  return (
    <div className='drop'>
      <h3>Entré</h3>
      <select onChange={e => setFoodId(e.target.value)}>
        <option value="food-1">Krabby Patty</option>
        <option value="food-2">Krusty Krab Pizza</option>
        <option value="food-3">Chum on a Stick</option>
      </select>
    </div>
  );

}
