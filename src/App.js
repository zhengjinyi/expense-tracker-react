import React from 'react';
import './App.css';
import { Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import { TransationList} from './components/TransationList';
import {AddTransation} from './components/AddTransation'
function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransationList></TransationList>
        <AddTransation></AddTransation>
      </div>
    </div>
  );
}

export default App;
