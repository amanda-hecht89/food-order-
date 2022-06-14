import React from 'react';

export default function Meal({ food, drink, side }) {
  return (
    <div className='meal'>
      <img src={`${food}.jpg`} />
      <img src={`${drink}.jpg`} />
      <img src={`${side}.jpg`} />
    </div>
  );
}