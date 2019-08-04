import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/NewCounter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
