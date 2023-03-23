const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  // res.send('hello there!');
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  //console.log(req.body);

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / (height * height);
  res.send(
    `Thanks for posting your weight and height. Here is your BMI:${bmi} kg/m2`
  );
});

app.listen(port, function () {
  console.log(`bmiCalculator app listening on port ${port}`);
});
