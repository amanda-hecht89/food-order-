import { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionsForm, setInstructionsForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionsForm]);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={instructionsForm} onChange={e => setInstructionsForm(e.target.value)} />
        <button>Order Now!</button>
      </form>
    </section>
  );
}