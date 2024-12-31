// src/App.tsx
import React from 'react';
import '../components/App.css';
import { Header } from '../components/Header.tsx';
import { Hero } from '../components/Hero.tsx';
import { Form } from '../components/Form.tsx';
import { ListaVagas } from '../components/ListaVagas.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ListaVagas />
      <Form />
    </div>
  );
}

export default App;