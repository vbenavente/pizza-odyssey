var hoursArray = [];
var getRandomIntInclusive;
var driversRecommended;
var ballard, firstHill, theInternationalDistrict, southLakeUnion, georgeTown, ravenna;
var eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm;
var pizzasDelivered1;
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

eightAm = {
  time: '8:00',
  pizzasSold: getRandomIntInclusive(0,4),
  pizzasDelivered: getRandomIntInclusive(0,4),
};
driversRecommended = eightAm.pizzasDelivered;
eightAm.driversRec = Math.ceil(driversRecommended / 3);

hoursArray.push(eightAm);//, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

//for(var i = 0; i < hoursArray.length; i++);
var ballardUl = document.getElementById('Ballard');
var cityBallard = document.createElement('li');
cityBallard.textContent = hoursArray[0].time + 'am ' + hoursArray[0].pizzasSold + ' pizzas ' + hoursArray[0].pizzasDelivered + ' deliveries ' + '-- [drivers recommended: ' + hoursArray[0].driversRec + ']';
ballardUl.appendChild(cityBallard);
