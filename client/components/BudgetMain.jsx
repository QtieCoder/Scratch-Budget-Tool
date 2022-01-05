import React from 'react';
// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const BudgetMain = () => {
  return (
    <div className='container budget-container'>
      <div className='header1'> My Account</div>
      <div className='header2'> Hi Cohort 30! </div>

      <div className='content-large'>Total Monthly Budget:
        
        <ul className='categories'>
          <table>
            <thead>
              <br></br>
              <tr>
                <th> Spending So far: </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
              <td>Groceries</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Gym</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Rent</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Car Loan</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Fun Money</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Studen Loan</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Electronics</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Day Care</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Clothing</td>
              <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul>
      </div>
      <div className='content-medium1'>Total Spent
      <ul className='totalSpent'>
          <table>
            <thead>
              <br></br>
              <br></br>
              <tr>
                <th>  </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
                <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr> <tr>
               <td>$</td>
              </tr>
              <tr>
                 <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul></div>
      <div className='content-medium2'>Budget
      <ul className='remBudget'>
          <table>
            <thead>
              <br></br>
              <br></br>
              <tr>
                <th>  </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
                <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr> <tr>
               <td>$</td>
              </tr>
              <tr>
                 <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul></div>

      <div className='buttonbox'>
      <Link to='/totaldisplay'>
      <button className="button">Input Spending</button>
      </Link>
      <br></br>
      <Link to='/newbudget'>
      <button className="button">Input New Budget</button>
      </Link>
      <img src="https://media.istockphoto.com/photos/budget-concept-for-year-2021-and-2022-years-picture-id1287961292?b=1&k=20&m=1287961292&s=170667a&w=0&h=qf41Jo5BIo2ejHsT-FkrCyn2uQSNbhMbGKmNpdXbG9w=" alt="budget pic" className="budgetpic" />
      </div>
     </div>
  );
};

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}
