import React from 'react';
import './App.css';
import Counter from './components/NewCounter';

// =============================================
// 왜? 무슨 오류일까요?
// import DevTools from 'mobx-react-devtools';
// =============================================
function App() {
  return (
    <div className="App">
      <Counter />
      {/* process.env.NODE_ENV === 'development' && <DevTools /> */}
    </div>
  );
}

export default App;
