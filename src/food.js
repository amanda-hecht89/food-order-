import React from 'react';

export default function Meal({ food, drink, side }) {
  return (
    <div className='meal'>
      <img src={`images/${food}.png`} style={{ height:'100' }}/>
      <img src={`images/${drink}.png`} style={{ height:'100' }}/>
      <img src={`images/${side}.png`} style={{ height:'100' }} />
    </div>
  );
}