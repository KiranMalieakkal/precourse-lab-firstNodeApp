const prompt = require('prompt-sync')();
const app = require("./countdays.js");
const countdays = require('./countdays');

function greet(namePassedIn) {
  return 'Welcome to SALT, ' + namePassedIn;
}
/*function calculateDays(inputDateString) {
  var currentDate = new Date();
  var inputDate = new Date(inputDateString); 
  return Math.round((inputDate-currentDate)/(1000 * 60 * 60 * 24)); 
}*/

// Main program
const name = prompt('What is your name? ');
const greeting = greet(name);
var inputDate= prompt('when does the course start?')
var days= app.calculateDays(inputDate);
console.log(greeting);
console.log("Today it is "+days+" days left until your course");

module.exports.greet = greet;