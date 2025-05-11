
// init project
var express = require('express');
var app = express();
require("dotenv").config();
var cors = require('cors');
const projectRoute = require('./routes/projectRoute');
const connectDB = require('./db/connect');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.use(cors());
app.use(express.json());
app.use("/api", projectRoute);


// Listen on port set in environment variable or default to 3000
// var listener = app.listen(process.env.PORT || 3000, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

const start = async (res) => {
  // console.log(process.env.DB);
  
  try {
    connectDB(process.env.DB);
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();