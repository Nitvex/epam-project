# This project is for EPAM "Javascript Development" course

## Frontend

Built using React+Redux+Bootstrap. Bundled by webpack

### Main page

 - Requests locations to display information
 - Doesn't require authorization
 
### About page

 - Just displays information
 - Doesn't require authorization 
  
### Account page

 - Requires authorization
 - If requested without authorization then redirects to login page
 - Here user can make an appointment with master
 - User can cancel appointment
 - Appointment making and cancellation make requests to server, which stores data about different users. So, different users see different data.
 - Time, places, names of masters are requested from server
 - User can't make appointments at the same date, time, place and master. If he does, warning is shown
 - User can't make appointments at the past date (or current date). Only future dates are allowed. If user tries to do that, warning is shown
 - Appointments are sorted by date

### Login page 

 - Lets user to get authorized
 - If user enters incorrect data, error message is shown

## Backend 

Built using Node.js+Express

## To start project

- git clone
- **npm install** to install dependencies
- **node src/server/server.js** to start Node.js server or **npm run srv**
- **npm run dev** to start dev-server or **npm run wpb** to build project and then open index.html in public folder

Note: default users have following logins and passwords:

  -----------------------
 |   login    | password |
 |:----------:|:--------:|
 | user       | 12345    |
 | admin      | 54321    |
 | anotherOne | 123321   | 

  