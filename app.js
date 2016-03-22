var hoursArray = [];
var getRandomIntInclusive;
var driversRecommended;
var eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm;
var pizzasDelivered1;
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

eightAm = {
  pizzasSold: getRandomIntInclusive(0,4),
  pizzasDelivered: getRandomIntInclusive(0,4),
};
var DriversRecommended = eightAm.pizzasDelivered;
eightAm.DriversRec = Math.ceil(DriversRecommended / 3);

hoursArray.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);
