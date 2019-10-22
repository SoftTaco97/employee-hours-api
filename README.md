# Employee API

## Overview

This is a basic Node.js REST API using the Express.js framework and a MySQL database. 

The purpose of this API is to be able to send a GET request to an end point with an employees name and get the hours that the employee has worked.

***Note: This is for educational purposes, please do not use this for your business needs. Thanks : )***

**Valid routes**

| Route | Data |
| ---   | ----     |
| `/employee/employee_name/` | Overview of employee's current hours (day and week) |
| `/employee/employee_name/day/` | Hours the employee has worked during the current day |
| `/employee/employee_name/day/` | Hours the employee has worked during the current week |

**Employees**

| Name | Example Route |
| ---   | ----     |
| Morgan | `/employee/morgan/` |
| James | `/employee/james/` |
| Alex | `/employee/alex/` |
| Rick | `/employee/rick/` |
| Morty | `/employee/morty/` |

## Requirements

1. Node.js
2. npm
3. MySQL

## Set up

1. Download github repo to local machine
2. Run `npm i` to install packages
3. Create `.env` file using `.env.example` included in repo
4. Create a database using the `data.sql` included in the repo
   - **This file creates the database for you.**
5. *???*
6. ***Profit***

## Testing

```
// TODO: Write tests...
// TODO: Document tests...
// TODO: Stay hydrated...
```

## Development

1. Ensure that you have completed all steps in the set up section
2. Run `npm run dev`

## Production

1. Ensure that you have completed step 1 of the development section
2. Run `node app.js`
