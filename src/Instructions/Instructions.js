import React from 'react';

export default function Instructions({ instructions, key }) {
  return (
    <li key={key} className='imstruct'>
      {
        instructions
      }
    </li>
  );
}