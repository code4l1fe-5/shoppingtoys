// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


 

const userName = "thedk";
const userPassword = "J2NfoN4y5oZpwu81";

const dbName = "toystore";
 

const url = "mongodb+srv://" +
    userName + ":" + userPassword +     
    "@cluster0.uhy3xgk.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

///////////////////////////////////////////////////a
 

/////////////////////////////////////////////////////////a
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}