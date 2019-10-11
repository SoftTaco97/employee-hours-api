/**
 * File for handling routes
 * 
 * @author Jared Martinez
 * @version 10/08/2019
 */

// Dependencies
const router = require('express').Router();
const server = require('./server.js');

router.param('employee', server.validateRequest);
router.get('/employee/:employee', server.getEmployeeOverview);
router.get('/employee/:employee/day/', server.getTimeForDay);
router.get('/employee/:employee/week/', server.getTimeForWeek); 

module.exports = router;