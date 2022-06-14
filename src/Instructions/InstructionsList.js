import React from 'react';
import Instructions from './Instructions';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <ul>
        {
          instructions.map((instructions, i) => <Instructions key={instruction + i} instruction={instruction} />)
        }  
      </ul>
    </section>
  );
}