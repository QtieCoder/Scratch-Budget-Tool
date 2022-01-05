import React, { Component } from 'react';
// import useForm from 'react-hook-form';

const NewBudgetForm = () => {
  return (
    <div className="newBudget" style={{fontSize: '30x'}}> Please enter in your new budget
    <div className="container newBudgetForm">
      <br></br>
      <br></br>
      <form>
        <input type="text" placeholder = "Groceries" name="groceries" className="type" />
        <input type="text" placeholder = "Gym" name="gym" className="type" />
        <input type="text" placeholder = "Rent" name="rent" className="type" />
        <input type="text" placeholder = "Car Loan" name="car loan" className="type" />
        <input type="text" placeholder = "Fun Money" name="fun money" className="type" />
        <input type="text" placeholder = "Student Loan" name="student loan" className="type" />
        <input type="text" placeholder = "Electronics" name="electronics" className="type" />
        <input type="text" placeholder = "Day Care" name="day care" className="type" />
        <input type="text" placeholder = "Clothing" name="clothing" className="type" />
      </form>

        <br></br>
        <button className="submit"> SUBMIT </button>
    </div>
    </div>
 
  );
};

export default NewBudgetForm;
