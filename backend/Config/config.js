const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = 'mongodb+srv://sayyedaltamash853:0MOpzVcp3FqsgMuQ@hrconnectpro.9bdh8.mongodb.net/?retryWrites=true&w=majority&appName=HRConnectPro'
mongoose.set('strictQuery', false);
async function ConnectDb() {
  try {
    await mongoose.connect(url);
    console.log("mongoDb connected");
  } catch (error) {
    console.log("Error while connecting to db", error);
  }
}

module.exports = ConnectDb;
