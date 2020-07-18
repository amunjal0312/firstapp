import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <div className='chart'>
        { /*<LineChart /> */}
        <PieChart />
      </div>
    </div>
  );
}

export default App;
