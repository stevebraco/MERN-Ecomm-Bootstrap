const PORT = 5000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = express.Router();
require('dotenv').config()

app.use("/api", routes);

routes.use(express.urlencoded({ extended: false }));
routes.use(express.json());

//cors
routes.use(cors());

// MongoDB Client connect using MongoDb Compass
const MongoDBClient = require("mongodb").MongoClient;
const uri = process.env.MONGODB_URL
const client = new MongoDBClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const DATABASE = "marketplace";

// connect to DB
client.connect((err) => {
  if (err) {
    throw Error(err);
  }
  !err && console.log(`Successfully connected to database`);
  const products = client.db(DATABASE).collection("products");

  // perform actions on the collection object
  //Récupérer
  routes.get("/products", (req, res) => {
    products
      .find()
      .toArray()
      .then(() => res.status(200).send({ results }))
      .catch((err) => res.send(err));
  });

  //Ajouter
  routes.post("/products/add", function (req, res) {
    console.log(req.body);
    products
      .insertOne(req.body)
      .then(() =>
        res.status(200).send(`Successfully Inserted New Document`)
      )
      .catch((err) => res.send(err));
  });

  // client.close();
});

//connect
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
