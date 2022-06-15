import React from 'react';
import '../App.css';


export default function Instructions({ instruction, key }) {
  return (
    <li key={key} className='instruct'>
      {
        instruction
      }
    </li>
  );
}