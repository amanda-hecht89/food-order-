import React from 'react';

export default function FoodDropDown({ setFoodId }) {
  return (
    <div>
      <select onChange={e => setFoodId(e.target.value)}>
        <option value=" ">1</option>
        <option value=" ">2</option>
        <option value=" ">3</option>
      </select>
    </div>
  );

}
