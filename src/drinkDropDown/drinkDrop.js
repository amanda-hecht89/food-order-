import React from 'react';

export default function drinkDropDown({ setDrinkId }) {
  return (
    <div>
      <select onChange={e => setDrinkId(e.target.value)}>
        <option value=" ">1</option>
        <option value=" ">2</option>
        <option value=" ">3</option>
      </select>
    </div>
  );
}