'use strict';

var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

var counter = 0;
var trainings = {
  0: {id: 0, name: "AngularJS Basics", description: "The Basic Knowledge you know to develop your SinglePageApplication", nextRun: nowPlusDays(24), discontinued: false, imageUrl: "assets/images/trainings/angularjs-shield.svg"},
  1: {id: 1, name: "AngularJS Advanced", description: "Great Advanced course about the superheroic Framework", nextRun: nowPlusDays(12), discontinued: false, imageUrl: "assets/images/trainings/angularjs-shield.svg"},
  2: {id: 2, name: "Angular2 & TypeScript", description: "Awesome course about the brand new Angular 2", nextRun: nowPlusDays(3), discontinued: false, imageUrl: "assets/images/trainings/angular2-shield.svg"},
  3: {id: 3, name: "TypeScript", description: "The right way to understand how to bring JavaScript to another Level", nextRun: nowPlusDays(6), discontinued: false, imageUrl: "assets/images/trainings/typescript-logo.svg"},
  4: {id: 4, name: "Eclipse RCP", description: "Old School", nextRun: new Date(2015, 11, 2), discontinued: true}
};

function nowPlusDays(days) {
  return new Date(Date.now() + 1000 * 60 * 60 * 24 * days);
}

app.get('/api/training', function(req, res){
  var trainingArray = _.values(trainings);
  res.send({ data: trainingArray});
});

app.post('/api/training', function (req, res) {
  var id = counter++;
  var training = req.body;

  training.id = id;

  console.log('Adding training to collection: %j', training);
  trainings[training.id] = training;

  res.send({ data: training });
});

app.get('/api/training/:id', function (req, res) {
  var id = req.param('id');

  if (trainings[id]) {
    var training = trainings[id];
    res.send({ data: training });
  }
  else {
    res.status(404);
    res.send();
  }
});

app.put('/api/training/:id', function (req, res) {
  var id = req.param('id');
  var training = req.body;
  training.id = id;

  console.log('Updating training in collection: %j', training);

  if (trainings[id]) {
    trainings[id] = training;
    res.send({ data: training });
  }
  else {
    res.status(404);
    res.send();
  }
});

app.delete('/api/training/:id', function (req, res) {
  var id = req.param('id');
  
  if (trainings[id]) {
    console.log('Removing training from collection: %j', trainings[id]);

    delete trainings[id];
    res.status(200);
  }
  else {
    res.status(404);
  }

  res.send();
});



var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
