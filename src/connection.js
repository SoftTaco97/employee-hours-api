/**
 * File for interacting with the database
 * 
 * @author Jared Martinez
 * @version 10/07/2019 
 */

// Dependencies
const mysql = require('mysql');
require('dotenv').config();

/**
 * Function for getting information for an employee
 * 
 * @param { String } employee
 * 
 * @return { Array }
 */
const getEmployeeData = (employee) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    });

    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if(err) {
                return reject(err);
            }

            const safe_employee = connection.escape(employee);
            connection.query(`SELECT * FROM employees WHERE employee_name = ${safe_employee}`, (err, results) => {
                if(err) {
                    return reject(err);
                }
                resolve(results);
            })
        });
    });
}

module.exports = {
    getEmployeeData
}