var getRandomIntInclusive;
var myArray = [];

var eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm;
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pizzaSoldBlock1 = function () {
  Math.floor((Math.random() + 4) + 1);
  console.log('pizzaSoldBlock1');
};
pizzaSoldBlock1();

var pizzaDeliveriesBlock1 = function() {
  Math.floor((Math.random() + 4) + 1);
  console.log('pizzaDeliveriesBlock1');
};
pizzaDeliveriesBlock1();

var Ballard = {
  hour: '8:00',
  pizzaSold: 'pizzaSoldBlock1',
  deliveries: 'PizzaDeliveriesBlock1',
  driversRec: function(){
    if(deliveries > 0) {
      console.log('Drivers Recommended: ' + (Math.ceil(deliveries / 3)));
    } else {
      console.log('No Drivers Recomended');
    }
  }
};
Ballard();
