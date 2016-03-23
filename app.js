var hoursArrayBallard = [];
var hoursArrayFirstHill = [];
var hoursArrayIntDist = [];
var getRandomIntInclusive;
var driversRecommended;
var ballard, firstHill, theInternationalDistrict, southLakeUnion, georgeTown, ravenna;
var eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm;
var what;
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStoreHoursArray(){
  eightAm = {
    time: '8:00am',
    pizzasSold: getRandomIntInclusive(0,4),
    pizzasDelivered: getRandomIntInclusive(0,4),
  };

  eightAm.driversRec = (Math.ceil(eightAm.pizzasDelivered / 3));

  nineAm = {
    time: '9:00am',
    pizzasSold: getRandomIntInclusive(0,4),
    pizzasDelivered: getRandomIntInclusive(0,4),
  };

  nineAm.driversRec = (Math.ceil(nineAm.pizzasDelivered / 3));

  tenAm = {
    time: '10:00am',
    pizzasSold: getRandomIntInclusive(0,4),
    pizzasDelivered: getRandomIntInclusive(0,4),
  };

  tenAm.driversRec = (Math.ceil(tenAm.pizzasDelivered / 3));

  elevenAm = {
    time: '11:00am',
    pizzasSold: getRandomIntInclusive(0,7),
    pizzasDelivered: getRandomIntInclusive(0,4),
  };

  elevenAm.driversRec = (Math.ceil(elevenAm.pizzasDelivered / 3));

  noon = {
    time: 'noon',
    pizzasSold: getRandomIntInclusive(0,7),
    pizzasDelivered: getRandomIntInclusive(0,4),
  };

  noon.driversRec = (Math.ceil(noon.pizzasDelivered / 3));

  onePm = {
    time: '1:00pm',
    pizzasSold: getRandomIntInclusive(0,7),
    pizzasDelivered: getRandomIntInclusive(0,4),
  };

  onePm.driversRec = (Math.ceil(onePm.pizzasDelivered / 3));

  twoPm = {
    time: '2:00pm',
    pizzasSold: getRandomIntInclusive(2,15),
    pizzasDelivered: getRandomIntInclusive(1,4),
  };

  twoPm.driversRec = (Math.ceil(twoPm.pizzasDelivered / 3));

  threePm = {
    time: '3:00pm',
    pizzasSold: getRandomIntInclusive(2,15),
    pizzasDelivered: getRandomIntInclusive(1,4),
  };

  threePm.driversRec = (Math.ceil(threePm.pizzasDelivered / 3));

  fourPm = {
    time: '4:00pm',
    pizzasSold: getRandomIntInclusive(2,15),
    pizzasDelivered: getRandomIntInclusive(1,4),
  };

  fourPm.driversRec = (Math.ceil(fourPm.pizzasDelivered / 3));

  fivePm = {
    time: '5:00pm',
    pizzasSold: getRandomIntInclusive(15,35),
    pizzasDelivered: getRandomIntInclusive(3,8),
  };

  fivePm.driversRec = (Math.ceil(fivePm.pizzasDelivered / 3));

  sixPm = {
    time: '6:00pm',
    pizzasSold: getRandomIntInclusive(15,35),
    pizzasDelivered: getRandomIntInclusive(3,8),
  };

  sixPm.driversRec = (Math.ceil(sixPm.pizzasDelivered / 3));

  sevenPm = {
    time: '7:00pm',
    pizzasSold: getRandomIntInclusive(15,35),
    pizzasDelivered: getRandomIntInclusive(3,8),
  };

  sevenPm.driversRec = (Math.ceil(sevenPm.pizzasDelivered / 3));

  eightPm = {
    time: '8:00pm',
    pizzasSold: getRandomIntInclusive(12,31),
    pizzasDelivered: getRandomIntInclusive(5,12),
  };

  eightPm.driversRec = (Math.ceil(eightPm.pizzasDelivered / 3));

  ninePm = {
    time: '9:00pm',
    pizzasSold: getRandomIntInclusive(12,31),
    pizzasDelivered: getRandomIntInclusive(5,12),
  };

  ninePm.driversRec = (Math.ceil(ninePm.pizzasDelivered / 3));

  tenPm = {
    time: '10:00pm',
    pizzasSold: getRandomIntInclusive(12,31),
    pizzasDelivered: getRandomIntInclusive(5,12),
  };

  tenPm.driversRec = (Math.ceil(tenPm.pizzasDelivered / 3));

  elevenPm = {
    time: '11:00pm',
    pizzasSold: getRandomIntInclusive(5,20),
    pizzasDelivered: getRandomIntInclusive(6,11),
  };

  elevenPm.driversRec = (Math.ceil(elevenPm.pizzasDelivered / 3));

  midnight = {
    time: 'midnight',
    pizzasSold: getRandomIntInclusive(5,20),
    pizzasDelivered: getRandomIntInclusive(6,11),
  };

  midnight.driversRec = (Math.ceil(midnight.pizzasDelivered / 3));

  oneAm = {
    time: '1:00am',
    pizzasSold: getRandomIntInclusive(5,20),
    pizzasDelivered: getRandomIntInclusive(6,11),
  };

  oneAm.driversRec = (Math.ceil(oneAm.pizzasDelivered / 3));

  console.log('my function was called!');
}

getStoreHoursArray();
hoursArrayBallard.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

getStoreHoursArray();
hoursArrayFirstHill.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

//hoursArrayIntDist.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

for(var i = 0; i < hoursArrayBallard.length; i++) {
  var ballardArt = document.getElementById('Ballard');
  var cityBallard = document.createElement('ul');
  if(hoursArrayBallard[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArrayBallard[i].driversRec + ']';
  }
  cityBallard.textContent = hoursArrayBallard[i].time + ' ' + hoursArrayBallard[i].pizzasSold + ' pizzas ' + hoursArrayBallard[i].pizzasDelivered + ' deliveries ' + what;
  ballardArt.appendChild(cityBallard);
}

for(var i = 0; i < hoursArrayFirstHill.length; i++) {
  var firstHillArt = document.getElementById('First Hill');
  var cityFirstHill = document.createElement('ul');
  if(hoursArrayFirstHill[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArrayFirstHill[i].driversRec + ']';
  }
  cityFirstHill.textContent = hoursArrayFirstHill[i].time + ' ' + hoursArrayFirstHill[i].pizzasSold + ' pizzas ' + hoursArrayFirstHill[i].pizzasDelivered + ' deliveries ' + what;
  firstHillArt.appendChild(cityFirstHill);
}
