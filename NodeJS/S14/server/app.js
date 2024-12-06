const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const dburl = "mongodb://localhost:27017";
const mongoclient = new MongoClient(dburl);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/newuser", async (req, res) => {
  await mongoclient.connect();

  var db = mongoclient.db("usersdb");
  var collection = db.collection("users");
  var data = await collection.insertOne(req.body);
  res.send({
    status: true,
    result: "Inserted successfuly",
  });
}); //http://localhost:7979/newuser

app.get("/getusers", async (req, res) => {
  await mongoclient.connect();

  var db = mongoclient.db("usersdb");
  var collection = db.collection("users");

  var usersdata = await collection.find().toArray();

  res.json(usersdata);
}); //http://localhost:7979/getusers

app.delete("/removeuser/:id", async (req, res) => {
  await mongoclient.connect();

  var db = mongoclient.db("usersdb");
  var collection = db.collection("users");

  var result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

  console.log(result);
  res.json({
    ok: true,
    message: "Users Removed successfully",
  });
}); //http://localhost:7979/removeuser/<id>

app.get("/getOneUser/:id", async (req, res) => {
  //access the id from url
  var id = req.params.id;
  await mongoclient.connect();
  var db = mongoclient.db("usersdb");
  var collection = db.collection("users");
  var data = await collection.findOne({ _id: new ObjectId(id) });
  if (!data) {
    res.json({
      ok: false,
      result: "No User Exist with Provided id",
    });
  } else {
    res.json({
      ok: true,
      result: data,
    });
  }
});
//http://localhost:7979/getOneUser/<id>

app.put("/updateuser", async (req, res) => {
  var newdata = req.body;
  var id = newdata._id;
  delete newdata._id;
  // console.log(newdata);
  await mongoclient.connect();
  var db = mongoclient.db("usersdb");
  var collection = db.collection("users");

  var data = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: newdata }
  );
  res.send("Updated User");
}); //http://localhost:7979/updateuser

app.listen(7979, () => {
  console.log("Server is started");
});
