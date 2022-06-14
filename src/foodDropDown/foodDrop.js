import React from 'react';

export default function FoodDropDown({ setFoodId }) {
  return (
    <div>
      <select onChange={e => setFoodId(e.target.value)}>
        <option value="food-2">Krabby Patty</option>
        <option value="food-3">Krust Krab Pizza</option>
        <option value="food-1">Chum on a Stick</option>
      </select>
    </div>
  );

}
