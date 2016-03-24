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
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

ballard = new CityLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('noon', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('midnight', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00am', 8, 15, 6, 16));

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

function makeTable(store, storeId){

  var pizzaTable = document.getElementById(storeId);
  for(var i = 0; i < store.hourlyLocationData.length; i++) {
    var fancyRow = generateDataRow([store.hourlyLocationData[i].time, store.hourlyLocationData[i].pizzasSold, store.hourlyLocationData[i].deliveriesMade, store.hourlyLocationData[i].driversNeeded]);
    pizzaTable.appendChild(fancyRow);
  }
}

makeTable(ballard, 'ballard');
