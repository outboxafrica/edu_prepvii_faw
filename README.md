# EDU-API(PREP VII FAW)

EDU Q&A Platform where people can ask questions and provide responses.

## Tech Stack
. Node.js
. Express
. JSON Web Token (JWT)
. Bcrypt

## Main Files: Project Structure
|--app.js
|--server.js
  |--models
    |--authModel.js
    |--questionModel.js
  |--routes
    |--authRoute.js
    |--QuestionRoute.js


## Environment Variables
. PORT -- server port number
. DB_URL -- database URL

## Usage
1. clone this repository.
2. cd into project root directory.
3. run npm install to install all dependencies(you must have node installed).
4. Run npm start to start the server.
5. Open up Postman and then test out the Endpoints.

## CRUD Operations
## SignUp User
Signs in a single user into the application
###Endpoint     ###Method       ###Params       ###Data-type
/auth/signup    POST            None            None

## Login User
Logs in a single user in the application
###Endpoint     ###Method       ###Params       ###Data-type
/auth/login     POST            None            None

## Contributors
. Tracy Nuwagaba
. Walaga Priscilla