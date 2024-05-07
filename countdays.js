const prompt = require('prompt-sync')();
const app = require("./index.js");

function calculateDays(inputDateString) {
    var currentDate = new Date();
    var inputDate = new Date(inputDateString); 
    return Math.round((inputDate-currentDate)/(1000 * 60 * 60 * 24)); 
  }


module.exports = calculateDays;