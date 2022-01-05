import query from '../models/sql.js'
import {userColumns, transactionsColumns, categoriesColumns, categoryBudgetsColumns} from '../data/queryColumns.js';

const controller = {}
//will return a valid user_id in res.locals.user_id and userData in res.locals.userData
controller.getUser = (req, res, next) => {
    console.log(`    Running sqlController.getUser`);
    console.log(userColumns);
    //dummy query to get all users
    query(`SELECT ${userColumns} FROM users;`)
        .then(query => {
            console.log(query.rows);
            //insert logic to get specific userID and userData
            //dummy data
            res.locals.userData = {'name': 'TEST'};
            res.locals.userID = 1;
        })
        .then(() => next())
        .catch(err => console.log(err));
    //set the user id to res.locals.user_id
}
//assume there's a valid res.locals.user_id
controller.getTransactions = (req, res, next) => {
    console.log(`    Running sqlController.getTransactions`);
    // set userID to res var
    const userID = res.locals.userID;
    //query all transactions where trnsaction user id equals users id
    query(`SELECT ${transactionsColumns} FROM transactions t INNER JOIN categories c on t.category_id = c._id WHERE t.user_id = ${userID}; `)
        .then(query => {
            // console.log(query.rows);
            res.locals.transactions = query.rows;
        })
        .then(() => next())
        .catch(err => console.log(err));
}
//assume there's a valid res.locals.user_id
controller.getCategories = (req, res, next) => {
    console.log(`    Running sqlController.getCategories`);
    // set userID to res var
    const userID = res.locals.userID;
    //query all categories by inner joining the categories user id to the users id
    query(`SELECT ${categoriesColumns} FROM categories c WHERE c.user_id = ${userID}; `)
        .then(query => {
            // console.log(query.rows);
            res.locals.categories = query.rows;
        })
        .then(() => next())
        .catch(err => console.log(err));
}
//assume there's a valid array of categories
controller.getCategoryBudgets = (req, res, next) => {
    console.log(`    Running sqlController.getCategoryBudgets`);
    // set userID to res var
    const userID = res.locals.userID;
    const categories = res.locals.categories;
    //query all category budgets
    query(`select ${categoryBudgetsColumns} from categorybudgets b INNER JOIN categories c ON b.category_id = c._id WHERE c.user_id=${userID}; `)
        .then(query => {
            // console.log(query.rows);
            res.locals.categoryBudgets = query.rows;
        })
        .then(() => next())
        .catch(err => console.log(err));
}
export default controller;