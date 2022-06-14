import React from 'react';
import './SideDrop.css';

export default function SideDropDown({ setSideId }) {
  return (
    <div className='drop'>
      <h3>pick a side!</h3>
      <select onChange={e => setSideId(e.target.value)}>
        <option value="side-1">Kelp Jerky</option>
        <option value="side-2">Kelp Fries</option>
        <option value="side-3">Kelp Chips</option>
      </select>
    </div>
  );
}