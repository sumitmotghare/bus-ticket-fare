# RESTful API

This is a RESTful API application to pull bus fare from source to destination. The application is build with Node.js and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for node.js.

---

#### To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/sumitmotghare/bus-ticket-fare.git
```

#### One command to run the application.

Execute below command to skip all the below steps. Pre-requisite Docker/Docker-Compose. If not available then please execute all below steps.

```bash
docker-compose up
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: cd into the cloned repo and run the db restore command:

```bash
mongorestore --db bus-locations mongo-seed/db-dump/bus-locations/locations.bson
```

Step 4: Put your credentials and environment variables in the .env file.

```bash
PORT=3000
MONGODB_URI=DB URI
DB_NAME=DATABASE NAME OF YOUR CHOICE
DB_USER=DATABASE USER
DB_PASS=DATABASE USER PASSWORD 
MINIMUM_BUS_FARE=3
MINIMUM_BUS_FARE_DISTANCE=3
```

Step 5: Start the API by

```bash
npm start
```

#### Import Postman Collection - This will help you to get all API calls.

URL - https://www.getpostman.com/collections/be04b592cff30ff776ff

![Get All Locations API Call](https://github.com/sumitmotghare/bus-ticket-fare/main/images/get-all-locations.jpg?raw=true)

![Get Bus Fare API Call](https://github.com/sumitmotghare/bus-ticket-fare/main/images/get-fare.jpg?raw=true)

## Author

- [**Sumit Motghare**]

## License

This project is licensed under the MIT License.
