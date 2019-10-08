/**
 * File for server logic
 * 
 * @author Jared Martinez
 * @version 10/07/2019
 */

const connection = require('./connection.js');

const badRequest = (res, message) => {
    res.json({ error: message });
}

const getEmployeeName = (req) => req.params.employee;
/**
 * Function for validating that the request was valid
 * 
 * @param { object } req
 * @param { object } res  
 * @param { function } next 
 * 
 * @return { void }
 */
const validateRequest = (req, res, next) => {
    if(getEmployeeName(req) === undefined) {
        return badRequest(res, 'Must provide an employee.');
    }
    next();
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
const getTimeForWeek = async (req, res, next) => {
    const employee = getEmployeeName(req);
    
    try {
        const employeeData = await connection.getEmployeeData(employee);
        if(employeeData && employeeData[0]) {
            const hoursForWeek = employeeData[0].hours_week;
            res.json({
                name: employee,
                week: hoursForWeek
            }); 
            return;
        }
        badRequest(res, 'Employee not found.');
    } catch(err) {
        badRequest(res, 'Encountered an error, try again later.');
    }
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
const getTimeForDay = async (req, res, next) => {
    const employee = getEmployeeName(req);
    
    try {
        const employeeData = await connection.getEmployeeData(employee);
        if(employeeData && employeeData[0]) {
            const hoursForDay = employeeData[0].hours_day;
            res.json({
                name: employee,
                day: hoursForDay
            }); 
            return;
        }
        badRequest(res, 'Employee not found.');
    } catch(err) {
        badRequest(res, 'Encountered an error, try again later.');
    }
}

/**
 * Function for getting the overview information for an employee
 * 
 * @param { object } req 
 * @param { object } res 
 * @param { function } next 
 */
const getEmployeeOverview = async (req, res, next) => {
    // Getting employee name from url
    const employee = getEmployeeName(req);

    try {
        const employeeData = await connection.getEmployeeData(employee);

        if(employeeData && employeeData[0]) {
            const hoursForDay = employeeData[0].hours_today;
            const hoursForWeek = employeeData[0].hours_week;

            res.json({
                name: employee,
                today: hoursForDay,
                week: hoursForWeek
            }); 
            return;
        }
        badRequest(res, 'Employee not found.');
    } catch {
        badRequest(res, 'Encountered an error, try again later.');
    }
}

module.exports = {
    getEmployeeOverview,
    getTimeForDay,
    getTimeForWeek,
    validateRequest
}