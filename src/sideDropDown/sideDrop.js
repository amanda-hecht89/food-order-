import React from 'react';

export default function SideDropDown({ setSideId }) {
  return (
    <div>
      <select onChange={e => setSideId(e.target.value)}>
        <option value="side-1">Kelp Jerky</option>
        <option value="side-2">Kelp Fries</option>
        <option value="side-3">Kelp Chips</option>
      </select>
    </div>
  );
}