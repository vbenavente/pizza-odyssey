var getRandomInclusive;
var cityLocation;
var ballard, firstHill, theIntDist, southLakeUnion, georgeTown, Ravenna;
var hourlyData;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cityLocation(name){
  this.name = 'Ballard';
  this.hourlyData = [];
}

cityLocation.prototype.pushhourlyData = function(data){
  this.hourlyData.push(data);
};

function hourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.PizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

ballard = new cityLocation('Ballard');
ballard.pushHourlyData(new hourlyData('8:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new hourlyData('9:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new hourlyData('10:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new hourlyData('11:00am', 5, 10, 2, 8));
ballard.pushHourlyData(new hourlyData('noon', 5, 10, 2, 8));
