require('dotenv').config()
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  password: process.env.PGPASSWORD,
  port: 5432,
});
//get all teachers from database
const getTeachers = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM teachers", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

//get all classes from database
const getClasses = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM classes", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
  };

  //get all students frpmdatabase
const getStudents = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM students", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
  };
module.exports = {
    getTeachers,
    getClasses,
    getStudents
  };