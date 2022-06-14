import React from 'react';
import './DrinkDrop.css';

export default function DrinkDropDown({ setDrinkId }) {
  return (
    <div className='drop'>
      <select onChange={e => setDrinkId(e.target.value)}>
        <option value="drink-1">Kelp Shake Small</option>
        <option value="drink-2">Kelp Shake Medium</option>
        <option value="drink-3">Kelp Shake Large</option>
      </select>
    </div>
  );
}