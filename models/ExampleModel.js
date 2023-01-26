const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const MONGODB_URL = "";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });

const ExampleSchema = new mongoose.Schema({
  stringProp: String,
  intProp: Number,
});

module.exports = mongoose.model("Example", ExampleSchema);
