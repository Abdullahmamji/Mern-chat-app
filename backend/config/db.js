const mongoose = require("mongoose");
const colors = require("colors");
const env = require("dotenv");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI ||
      "mongodb+srv://abdulmamji3:jimmy007@mernchatapp.vkrx0et.mongodb.net/MernChatApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;









