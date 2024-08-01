const { MONGODB_URI } = require("./utils/config");
const app = require("./app");

//Connect to database
const mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB..");
    //Start the server
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => console.log("Could not connect to MongoDB..", err));
