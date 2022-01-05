import pkg from 'pg';
const {Pool} = pkg;

//import environment variables
import * as dotenv from 'dotenv'
dotenv.config()
const {PG_URI} = process.env;


//creates a new pool here using the env variable
const pool = new Pool({
  connectionString: PG_URI
});

//function that console logs the query then calls it
const query = (text, params, callback) => {
  console.log('\n      Executed Query', text, '\n');
  return pool.query(text, params, callback);
}

export default query;