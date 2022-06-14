import React from 'react';
import './App.css';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section className='plankton'>
            Tell me your Name!!!! <hr />
      <input onChange={e => setOrderName(e.target.value)} />
    </section>
  );
}