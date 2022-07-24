import React from 'react';
import Header from './components/layout/Header';
import './styles/App.css';
import Home from './view/pages/Home';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
}
