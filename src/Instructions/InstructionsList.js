import React from 'react';
import Instructions from './Instructions';

export default function InstructionsList({ instructions }) {
  return (
    <section className='list'>
      <ul>
        {
          instructions.map((instruction, i) => <Instructions key={instruction + i} instruction={instruction} />)
        }  
      </ul>
    </section>
  );
}