import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import BudgetMain from './components/BudgetMain.jsx';
import NewBudgetForm from './components/NewBudgetForm.jsx';
import TotalsDisplay from './components/TotalsDisplay.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/budgetmain' element={<BudgetMain />} />
        <Route path='/newbudget' element={<NewBudgetForm />} />
        <Route path='/totaldisplay' element={<TotalsDisplay />} />
      </Routes>
     </Router>
  );
};

export default App;
