import React from 'react';
import Instructions from './Instructions';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <p>How do you want it?</p>
      <ul>
        {
          instructions.map((instructions, i) => <Instructions key={instruction + i} instruction={instruction} />)
        }  
      </ul>
      <p>thank you come again</p>
    </section>
  );
}