
// init project
var express = require('express');
var app = express();
var cors = require('cors');
const timeStampRoute = require('./routes/timeStamp');
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
app.use("/api", timeStampRoute);


// Listen on port set in environment variable or default to 3000
// var listener = app.listen(process.env.PORT || 3000, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

const start = async (res) => {
  try {
    // connectDB(dbUrl);
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "Internal Server Error",
      message: error.message,
    });
  }
};
start();