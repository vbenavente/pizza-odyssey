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

firstHill = new CityLocation('firstHill');
firstHill.pushHourlyData(new HourlyData('8:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('10:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('11:00am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('noon', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('1:00pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('2:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('3:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('4:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('5:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('6:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('7:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('8:00pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('9:00pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('10:00pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('11:00pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('midnight', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00am', 8, 20, 6, 16));

theIntDist = new CityLocation('theIntDist');
theIntDist.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
theIntDist.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
theIntDist.pushHourlyData(new HourlyData('10:00am', 0, 4, 0, 4));
theIntDist.pushHourlyData(new HourlyData('11:00am', 0, 7, 0, 4));
theIntDist.pushHourlyData(new HourlyData('noon', 0, 7, 0, 4));
theIntDist.pushHourlyData(new HourlyData('1:00pm', 0, 7, 0, 4));
theIntDist.pushHourlyData(new HourlyData('2:00pm', 2, 15, 1, 4));
theIntDist.pushHourlyData(new HourlyData('3:00pm', 2, 15, 1, 4));
theIntDist.pushHourlyData(new HourlyData('4:00pm', 2, 15, 1, 4));
theIntDist.pushHourlyData(new HourlyData('5:00pm', 10, 26, 4, 6));
theIntDist.pushHourlyData(new HourlyData('6:00pm', 10, 26, 4, 6));
theIntDist.pushHourlyData(new HourlyData('7:00pm', 10, 26, 4, 6));
theIntDist.pushHourlyData(new HourlyData('8:00pm', 8, 22, 7, 15));
theIntDist.pushHourlyData(new HourlyData('9:00pm', 8, 22, 7, 15));
theIntDist.pushHourlyData(new HourlyData('10:00pm', 8, 22, 7, 15));
theIntDist.pushHourlyData(new HourlyData('11:00pm', 0, 2, 2, 8));
theIntDist.pushHourlyData(new HourlyData('midnight', 0, 2, 2, 8));
theIntDist.pushHourlyData(new HourlyData('1:00am', 0, 2, 2, 8));

southLakeUnion = new CityLocation('southLakeUnion');
southLakeUnion.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('10:00am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('11:00am', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('noon', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('1:00pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('2:00pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('3:00pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('4:00pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('5:00pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('6:00pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('7:00pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('8:00pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('9:00pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('10:00pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('11:00pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('midnight', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('1:00am', 5, 21, 16, 31));

georgeTown = new CityLocation('georgeTown');
georgeTown.pushHourlyData(new HourlyData('8:00am', 2, 7, 3, 5));
georgeTown.pushHourlyData(new HourlyData('9:00am', 2, 7, 3, 5));
georgeTown.pushHourlyData(new HourlyData('10:00am', 2, 7, 3, 5));
georgeTown.pushHourlyData(new HourlyData('11:00am', 3, 8, 3, 9));
georgeTown.pushHourlyData(new HourlyData('noon', 3, 8, 3, 9));
georgeTown.pushHourlyData(new HourlyData('1:00pm', 3, 8, 3, 9));
georgeTown.pushHourlyData(new HourlyData('2:00pm', 1, 5, 1, 4));
georgeTown.pushHourlyData(new HourlyData('3:00pm', 1, 5, 1, 4));
georgeTown.pushHourlyData(new HourlyData('4:00pm', 1, 5, 1, 4));
georgeTown.pushHourlyData(new HourlyData('5:00pm', 5, 13, 2, 4));
georgeTown.pushHourlyData(new HourlyData('6:00pm', 5, 13, 2, 4));
georgeTown.pushHourlyData(new HourlyData('7:00pm', 5, 13, 2, 4));
georgeTown.pushHourlyData(new HourlyData('8:00pm', 22, 41, 15, 42));
georgeTown.pushHourlyData(new HourlyData('9:00pm', 22, 41, 15, 42));
georgeTown.pushHourlyData(new HourlyData('10:00pm', 22, 41, 15, 42));
georgeTown.pushHourlyData(new HourlyData('11:00pm', 15, 20, 6, 21));
georgeTown.pushHourlyData(new HourlyData('midnight', 15, 20, 6, 21));
georgeTown.pushHourlyData(new HourlyData('1:00am', 15, 20, 6, 21));

Ravenna = new CityLocation('Ravenna');
Ravenna.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
Ravenna.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
Ravenna.pushHourlyData(new HourlyData('10:00am', 0, 4, 0, 4));
Ravenna.pushHourlyData(new HourlyData('11:00am', 0, 7, 0, 4));
Ravenna.pushHourlyData(new HourlyData('noon', 0, 7, 0, 4));
Ravenna.pushHourlyData(new HourlyData('1:00pm', 0, 7, 0, 4));
Ravenna.pushHourlyData(new HourlyData('2:00pm', 2, 15, 1, 4));
Ravenna.pushHourlyData(new HourlyData('3:00pm', 2, 15, 1, 4));
Ravenna.pushHourlyData(new HourlyData('4:00pm', 2, 15, 1, 4));
Ravenna.pushHourlyData(new HourlyData('5:00pm', 6, 9, 5, 18));
Ravenna.pushHourlyData(new HourlyData('6:00pm', 6, 9, 5, 18));
Ravenna.pushHourlyData(new HourlyData('7:00pm', 6, 9, 5, 18));
Ravenna.pushHourlyData(new HourlyData('8:00pm', 4, 8, 2, 5));
Ravenna.pushHourlyData(new HourlyData('9:00pm', 4, 8, 2, 5));
Ravenna.pushHourlyData(new HourlyData('10:00pm', 4, 8, 2, 5));
Ravenna.pushHourlyData(new HourlyData('11:00pm', 2, 4, 3, 11));
Ravenna.pushHourlyData(new HourlyData('midnight', 2, 4, 3, 11));
Ravenna.pushHourlyData(new HourlyData('1:00am', 2, 4, 3, 11));

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

function generatePizzaRow(inputArray){}

function makeTable(store, storeId){

  var pizzaTable = document.getElementById(storeId);
  for(var i = 0; i < store.hourlyLocationData.length; i++) {
    var fancyRow = generateDataRow([store.hourlyLocationData[i].time, store.hourlyLocationData[i].pizzasSold, store.hourlyLocationData[i].deliveriesMade, store.hourlyLocationData[i].driversNeeded]);
    pizzaTable.appendChild(fancyRow);

    var fancyPizzas = generatePizzaRow([store.hourlyLocationData[i].pizzasSold]);
  }
}

makeTable(ballard, 'ballard');
makeTable(firstHill, 'firsthill');
makeTable(theIntDist, 'intdist');
makeTable(southLakeUnion, 'slu');
makeTable(georgeTown, 'georgetown');
makeTable(Ravenna, 'ravenna');
