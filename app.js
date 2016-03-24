var CityLocation;
var ballard, firstHill, theIntDist, southLakeUnion, georgeTown, Ravenna;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CityLocation(name){
  this.name = name;
  this.hourlyLocationData = [];
}

CityLocation.prototype.pushHourlyData = function(data){
  this.hourlyLocationData.push(data);
};

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.PizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

ballard = new CityLocation('ballard');
var eight = new HourlyData('8:00am', 0, 3, 1, 7);
ballard.pushHourlyData(eight);
var nine = new HourlyData('9:00am', 0, 3, 1, 7);
ballard.pushHourlyData(nine);
var ten = new HourlyData('10:00am', 0, 3, 1, 7);
ballard.pushHourlyData(ten);
var eleven = new HourlyData('11:00am', 0, 4, 0, 4);
ballard.pushHourlyData(eleven);
console.log ('ballard.HourlyData');

//var columndata = ['a', 'b', 'c', 1, 2, 3];
//generateDataRow(columndata);

function generateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function generateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

var pizzaTable = document.getElementById('ballard');

var firstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Pizzas Delivered', 'Drivers Recommended']);

pizzaTable.appendChild(firstRow);

for(var i = 0; i < ballard.hourlyLocationData.length; i++) {
  var fancyRow = generateDataRow([ballard.hourlyLocationData[i].time, ballard.hourlyLocationData[i].pizzasSold, ballard.hourlyLocationData[i].deliveriesMade, ballard.hourlyLocationData[i].driversNeeded]);

  pizzaTable.appendChild(fancyRow);
}
//var thirdRow = generateDataRow([ballard.hourlyLocationData[1].time, ballard.hourlyLocationData[1].pizzasSold, ballard.hourlyLocationData[1].deliveriesMade, ballard.hourlyLocationData[1].driversNeeded]);
//var fourthRow = generateDataRow([ballard.hourlyLocationData[2].time, ballard.hourlyLocationData[2].pizzasSold, ballard.hourlyLocationData[2].deliveriesMade, ballard.hourlyLocationData[2].driversNeeded]);
// var fifthRow = generateDataRow(ballard.hourlyLocationData[3].time, ballard.hourlyLocationData[3].pizzasSold, ballard.hourlyLocationData[3].deliveriesMade, ballard.hourlyLocationData[3].driversNeeded);
// var sixthRow = generateDataRow(ballard.hourlyLocationData[4].time, ballard.hourlyLocationData[4].pizzasSold, ballard.hourlyLocationData[4].deliveriesMade, ballard.hourlyLocationData[4].driversNeeded);
//document.getElementById('ballard').appendChild(pizzaTable);
