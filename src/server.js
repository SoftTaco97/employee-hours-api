/**
 * File for server logic
 * 
 * @author Jared Martinez
 * @version 10/08/2019
 */

const connection = require('./connection.js');

const badRequest = (res, message) => {
    res.status(401).json({ error: message });
}

const getEmployee = (req) => req.params.employee;
/**
 * Function for validating that the request was valid
 * 
 * @param { object } req
 * @param { object } res  
 * @param { function } next 
 * 
 * @return { void }
 */
const validateRequest = async (req, res, next) => {
    // Getting employee param
    const employee = getEmployee(req);

    // Validating that the employee was given
    if(employee === undefined) {
        return badRequest(res, 'Must provide an employee.');
    }

    // Pulling info from database
    try {
        const employeeData = await connection.getEmployeeData(employee.toLowerCase());

        // Validating that the info is there
        if(employeeData && employeeData[0]) {
            req.params.employee = employeeData[0]; // Pushing the info from the db into the request
            next(); // Moving along
            return;
        }
        badRequest(res, 'Employee not found.'); // Sending back that the employee is not there
    } catch(err) {
        badRequest(res, 'Encountered an error, try again later.'); // Error handling
        return;
    }
};

/**
 * Function for getting the current time an employee has worked for the week
 * 
 * @param { object } req 
 * @param { object } res 
 * @param { function } next 
 * 
 * @return { void }
 */
const getTimeForWeek = (req, res, next) => {
    // Getting employee information
    const employee = getEmployee(req);
    
    // Sending back employee information
    res.json({
        name: employee.employee_name,
        week: employee.hours_week
    }); 
    return; 
}

/**
 * Function for getting the current time an employee has worked for the day
 * 
 * @param { object } req 
 * @param { object } res 
 * @param { function } next 
 * 
 * @return { void }
 */
const getTimeForDay = (req, res, next) => {
    // Getting employee information
    const employee = getEmployee(req);

    // Sending back employee information
    res.json({
        name: employee.employee_name,
        day: employee.hours_today
    }); 
    return;
}

/**
 * Function for getting the overview information for an employee
 * 
 * @param { object } req 
 * @param { object } res 
 * @param { function } next 
 */
const getEmployeeOverview = (req, res, next) => {
    // Getting employee information
    const employee = getEmployee(req);

    // Sending back employee information
    res.json(employee);
    return;
}

module.exports = {
    getEmployeeOverview,
    getTimeForDay,
    getTimeForWeek,
    validateRequest
}