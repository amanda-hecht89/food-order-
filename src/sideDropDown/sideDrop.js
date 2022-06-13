import React from 'react';

export default function sideDropDown({ setSideId }) {
  return (
    <div>
      <select onChange={e => setSideId(e.target.value)}>
        <option value=" ">1</option>
        <option value=" ">2</option>
        <option value=" ">3</option>
      </select>
    </div>
  );
}