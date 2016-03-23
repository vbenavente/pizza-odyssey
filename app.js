var hoursArray = [];
var getRandomIntInclusive;
var driversRecommended;
var ballard, firstHill, theInternationalDistrict, southLakeUnion, georgeTown, ravenna;
var eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm;
var what;
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

eightAm = {
  time: '8:00',
  pizzasSold: getRandomIntInclusive(0,4),
  pizzasDelivered: getRandomIntInclusive(0,4),
};

eightAm.driversRec = (Math.ceil(eightAm.pizzasDelivered / 3));

nineAm = {
  time: '9:00',
  pizzasSold: getRandomIntInclusive(0,4),
  pizzasDelivered: getRandomIntInclusive(0,4),
};

nineAm.driversRec = (Math.ceil(nineAm.pizzasDelivered / 3));

hoursArray.push(eightAm, nineAm);//, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

for(var i = 0; i < hoursArray.length; i++) {
  var ballardUl = document.getElementById('Ballard');
  var cityBallard = document.createElement('li');
  if(hoursArray[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArray[i].driversRec + ']';
  }
  cityBallard.textContent = hoursArray[i].time + 'am ' + hoursArray[i].pizzasSold + ' pizzas ' + hoursArray[i].pizzasDelivered + ' deliveries ' + what;
  ballardUl.appendChild(cityBallard);
}
