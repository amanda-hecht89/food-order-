import { useState } from 'react';
import '../App.css';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionsForm, setInstructionsForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionsForm]);
  }

  return (
    <section className='order'>
      <form onSubmit={handleSubmit}><hr />
        <input value={instructionsForm} onChange={e => setInstructionsForm(e.target.value)} /><hr />
        <button className='button'>Order Now!</button>
      </form>
    </section>
  );
}