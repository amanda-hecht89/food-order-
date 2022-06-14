import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
            Tell me your Name!!!!
      <input onChange={e => setOrderName(e.target.value)} />
    </section>
  );
}