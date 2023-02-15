const mongoose = require("mongoose");
require("dotenv").config();


const mongoURL = process.env.MONGODB_URI;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const connectDB = async () => {
  await mongoose.connect(mongoURL,connectionParams);
  console.log("MongoDB connected");
};

module.exports = connectDB;
