# RESTful API

This is a RESTful API application to pull bus fare from source to destination. The application is build with Node.js and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for node.js.

---

#### To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/sumitmotghare/bus-ticket-fare.git
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials and environment variables in the .env file.

```bash
PORT=3000
MONGODB_URI=YOUR MONGODB URI
DB_NAME=DATABASE NAME OF YOUR CHOICE
DB_USER=DATABASE USER
DB_PASS=DATABASE USER PASSWORD 
MINIMUM_BUS_FARE=3
MINIMUM_BUS_FARE_DISTANCE=3
```

Step 4: Start the API by

```bash
npm start
```

## Author

- [**Sumit Motghare**]

## License

This project is licensed under the MIT License.
