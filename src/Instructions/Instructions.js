import React from 'react';

export default function Instructions({ instruction, key }) {
  return (
    <li key={key} className='instruct'>
      {
        instruction
      }
    </li>
  );
}