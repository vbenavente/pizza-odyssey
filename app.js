var cityLocation;
var ballard, firstHill, theIntDist, southLakeUnion, georgeTown, Ravenna;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cityLocation(name){
  this.name = name;
  this.hourlyData = [];
}

cityLocation.prototype.pushhourlyData = function(data){
  this.hourlyData.push(data);
};

function hourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.PizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

ballard = new cityLocation('Ballard');
ballard.pushhourlyData(new hourlyData('8:00am', 0, 3, 1, 7));
ballard.pushhourlyData(new hourlyData('9:00am', 0, 3, 1, 7));
ballard.pushhourlyData(new hourlyData('10:00am', 0, 3, 1, 7));
ballard.pushhourlyData(new hourlyData('11:00am', 5, 10, 2, 8));
ballard.pushhourlyData(new hourlyData('noon', 5, 10, 2, 8));

console.log ('running');

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
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

var pizzaTable = document.createElement('table');

var firstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Pizzas Delivered', 'Drivers Recommended']);
var secondRow = generateDataRow([hourlyData])
