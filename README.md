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
 - Here user can enroll in master
 - User can decline record
 - Enrollment and cancellation make requests to server, which stores data about different users. So, different users see different data.
 - Time, places, names of masters are requested from server

### Login page 

 - Lets user to get authotorized
 - If user inputs incorrect data, error message is shown

## Backend 

Built using Node.js+Express

## To start project

- git clone
- **npm install** to install dependencies
- **node src/server/server.js** to start Node.js server
- **npm run webpack** to start dev-server or **npm run wpb** to build project and then open index.html in public folder