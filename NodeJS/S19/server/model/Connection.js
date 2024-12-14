const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

const dbName = "usersdb";

async function createConnection() {
  await client.connect();

  const db = client.db(dbName);

  const collection = db.collection("users");

  return collection;
}

module.exports = createConnection;
