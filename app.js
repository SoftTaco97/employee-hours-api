/**
 * Main application file
 * 
 * The purpose of the application is to set up a simple REST API for getting employees time cards.
 * 
 * @author Jared Martinez
 * @version 10/06/2019
 */
// Dependencies
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const chalk = require('chalk');

// Application
const app = express();
const routes = require('./src/routes.js');
app.use(routes);
app.use(morgan('tiny'));


app.listen(3000, () => debug(`Listening on ${chalk.green(3000)}`));