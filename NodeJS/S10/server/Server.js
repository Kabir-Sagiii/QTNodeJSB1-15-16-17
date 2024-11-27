const { MongoClient } = require("mongodb");
const http = require("http");
const mongoDB_URL = "mongodb://localhost:27017";
const mongoclient = new MongoClient(mongoDB_URL);
const dbName = "nodeDB";
const collectionName = "users";

async function connectMongoDB(res) {
  //connecting with MongoDB Server
  await mongoclient.connect();
  console.log("Connected to Mongodb Server");

  //Connecting with MongoDB Database
  const db = mongoclient.db(dbName);
  console.log("Connected to Database");

  //Connect the collection
  const collection = db.collection(collectionName);
  console.log("Connected to collection");

  //Fetch data from collection
  var usersdata = await collection.find().toArray();
  console.log(usersdata);

  return usersdata;
  //   res.end(JSON.stringify(usersdata));
}

const server = http.createServer((req, res) => {
  connectMongoDB()
    .then((usersdata) => {
      res.end(JSON.stringify(usersdata));
    })
    .catch((error) => {
      res.end("Error while fetching the data");
    });
}); //http://localhost:6565

server.listen(6565, () => {
  console.log("Node Server Started");
});
