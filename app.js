var hoursArrayBallard = [];
var hoursArrayFirstHill = [];
var hoursArrayIntDist = [];
var hoursArraySLU = [];
var hoursArrayGeorgeTown = [];
var hoursArrayRavenna = [];
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

getStoreHoursArray();
hoursArrayIntDist.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

getStoreHoursArray();
hoursArraySLU.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

getStoreHoursArray();
hoursArrayGeorgeTown.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

getStoreHoursArray();
hoursArrayRavenna.push(eightAm, nineAm, tenAm, elevenAm, noon, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm, ninePm, tenPm, elevenPm, midnight, oneAm);

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

  var pizzaOdysseysBal = hoursArrayBallard[0].pizzasSold + hoursArrayBallard[1].pizzasSold + hoursArrayBallard[2].pizzasSold + hoursArrayBallard[3].pizzasSold + hoursArrayBallard[4].pizzasSold + hoursArrayBallard[5].pizzasSold + hoursArrayBallard[6].pizzasSold + hoursArrayBallard[7].pizzasSold + hoursArrayBallard[8].pizzasSold + hoursArrayBallard[9].pizzasSold + hoursArrayBallard[10].pizzasSold + hoursArrayBallard[11].pizzasSold + hoursArrayBallard[12].pizzasSold + hoursArrayBallard[13].pizzasSold + hoursArrayBallard[14].pizzasSold + hoursArrayBallard[15].pizzasSold + hoursArrayBallard[16].pizzasSold + hoursArrayBallard[17].pizzasSold;

}
console.log(pizzaOdysseysBal);

for(var i = 0; i < hoursArrayFirstHill.length; i++) {
  var firstHillArt = document.getElementById('FirstHill');
  var cityFirstHill = document.createElement('ul');
  if(hoursArrayFirstHill[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArrayFirstHill[i].driversRec + ']';
  }
  cityFirstHill.textContent = hoursArrayFirstHill[i].time + ' ' + hoursArrayFirstHill[i].pizzasSold + ' pizzas ' + hoursArrayFirstHill[i].pizzasDelivered + ' deliveries ' + what;
  firstHillArt.appendChild(cityFirstHill);

  var pizzaOdysseysFH = hoursArrayFirstHill[0].pizzasSold + hoursArrayFirstHill[1].pizzasSold + hoursArrayFirstHill[2].pizzasSold + hoursArrayFirstHill[3].pizzasSold + hoursArrayFirstHill[4].pizzasSold + hoursArrayFirstHill[5].pizzasSold + hoursArrayFirstHill[6].pizzasSold + hoursArrayFirstHill[7].pizzasSold + hoursArrayFirstHill[8].pizzasSold + hoursArrayFirstHill[9].pizzasSold + hoursArrayFirstHill[10].pizzasSold + hoursArrayFirstHill[11].pizzasSold + hoursArrayFirstHill[12].pizzasSold + hoursArrayFirstHill[13].pizzasSold + hoursArrayFirstHill[14].pizzasSold + hoursArrayFirstHill[15].pizzasSold + hoursArrayFirstHill[16].pizzasSold + hoursArrayFirstHill[17].pizzasSold;
}

console.log(pizzaOdysseysFH);

for(var i = 0; i < hoursArrayIntDist.length; i++) {
  var intDistArt = document.getElementById('InternationalDistrict');
  var cityIntDist = document.createElement('ul');
  if(hoursArrayIntDist[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArrayIntDist[i].driversRec + ']';
  }
  cityIntDist.textContent = hoursArrayIntDist[i].time + ' ' + hoursArrayIntDist[i].pizzasSold + ' pizzas ' + hoursArrayIntDist[i].pizzasDelivered + ' deliveries ' + what;
  intDistArt.appendChild(cityIntDist);

  var pizzaOdysseysIntD = hoursArrayIntDist[0].pizzasSold + hoursArrayIntDist[1].pizzasSold + hoursArrayIntDist[2].pizzasSold + hoursArrayIntDist[3].pizzasSold + hoursArrayIntDist[4].pizzasSold + hoursArrayIntDist[5].pizzasSold + hoursArrayIntDist[6].pizzasSold + hoursArrayIntDist[7].pizzasSold + hoursArrayIntDist[8].pizzasSold + hoursArrayIntDist[9].pizzasSold + hoursArrayIntDist[10].pizzasSold + hoursArrayIntDist[11].pizzasSold + hoursArrayIntDist[12].pizzasSold + hoursArrayIntDist[13].pizzasSold + hoursArrayIntDist[14].pizzasSold + hoursArrayIntDist[15].pizzasSold + hoursArrayIntDist[16].pizzasSold + hoursArrayIntDist[17].pizzasSold;
}

console.log(pizzaOdysseysIntD);

for(var i = 0; i < hoursArraySLU.length; i++) {
  var sLUArt = document.getElementById('SouthLakeUnion');
  var citySLU = document.createElement('ul');
  if(hoursArraySLU[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArraySLU[i].driversRec + ']';
  }
  citySLU.textContent = hoursArraySLU[i].time + ' ' + hoursArraySLU[i].pizzasSold + ' pizzas ' + hoursArraySLU[i].pizzasDelivered + ' deliveries ' + what;
  sLUArt.appendChild(citySLU);

  var pizzaOdysseysSLU = hoursArraySLU[0].pizzasSold + hoursArraySLU[1].pizzasSold + hoursArraySLU[2].pizzasSold + hoursArraySLU[3].pizzasSold + hoursArraySLU[4].pizzasSold + hoursArraySLU[5].pizzasSold + hoursArraySLU[6].pizzasSold + hoursArraySLU[7].pizzasSold + hoursArraySLU[8].pizzasSold + hoursArraySLU[9].pizzasSold + hoursArraySLU[10].pizzasSold + hoursArraySLU[11].pizzasSold + hoursArraySLU[12].pizzasSold + hoursArraySLU[13].pizzasSold + hoursArraySLU[14].pizzasSold + hoursArraySLU[15].pizzasSold + hoursArraySLU[16].pizzasSold + hoursArraySLU[17].pizzasSold;
}

console.log(pizzaOdysseysSLU);

for(var i = 0; i < hoursArrayGeorgeTown.length; i++) {
  var georgeTownArt = document.getElementById('Georgetown');
  var cityGeorgeTown = document.createElement('ul');
  if(hoursArrayGeorgeTown[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArrayGeorgeTown[i].driversRec + ']';
  }
  cityGeorgeTown.textContent = hoursArrayGeorgeTown[i].time + ' ' + hoursArrayGeorgeTown[i].pizzasSold + ' pizzas ' + hoursArrayGeorgeTown[i].pizzasDelivered + ' deliveries ' + what;
  georgeTownArt.appendChild(cityGeorgeTown);

  var pizzaOdysseysGT = hoursArrayGeorgeTown[0].pizzasSold + hoursArrayGeorgeTown[1].pizzasSold + hoursArrayGeorgeTown[2].pizzasSold + hoursArrayGeorgeTown[3].pizzasSold + hoursArrayGeorgeTown[4].pizzasSold + hoursArrayGeorgeTown[5].pizzasSold + hoursArrayGeorgeTown[6].pizzasSold + hoursArrayGeorgeTown[7].pizzasSold + hoursArrayGeorgeTown[8].pizzasSold + hoursArrayGeorgeTown[9].pizzasSold + hoursArrayGeorgeTown[10].pizzasSold + hoursArrayGeorgeTown[11].pizzasSold + hoursArrayGeorgeTown[12].pizzasSold + hoursArrayGeorgeTown[13].pizzasSold + hoursArrayGeorgeTown[14].pizzasSold + hoursArrayGeorgeTown[15].pizzasSold + hoursArrayGeorgeTown[16].pizzasSold + hoursArrayGeorgeTown[17].pizzasSold;
}

console.log(pizzaOdysseysGT);

for(var i = 0; i < hoursArrayRavenna.length; i++) {
  var ravennaArt = document.getElementById('Ravenna');
  var cityRavenna = document.createElement('ul');
  if(hoursArrayRavenna[i].driversRec < 1) {
    what = '[driver not recommended]';
  }else {
    what = ' [drivers recommended: ' + hoursArrayRavenna[i].driversRec + ']';
  }
  cityRavenna.textContent = hoursArrayRavenna[i].time + ' ' + hoursArrayRavenna[i].pizzasSold + ' pizzas ' + hoursArrayRavenna[i].pizzasDelivered + ' deliveries ' + what;
  ravennaArt.appendChild(cityRavenna);

  var pizzaOdysseysRav = hoursArrayRavenna[0].pizzasSold + hoursArrayRavenna[1].pizzasSold + hoursArrayRavenna[2].pizzasSold + hoursArrayRavenna[3].pizzasSold + hoursArrayRavenna[4].pizzasSold + hoursArrayRavenna[5].pizzasSold + hoursArrayRavenna[6].pizzasSold + hoursArrayRavenna[7].pizzasSold + hoursArrayRavenna[8].pizzasSold + hoursArrayRavenna[9].pizzasSold + hoursArrayRavenna[10].pizzasSold + hoursArrayRavenna[11].pizzasSold + hoursArrayRavenna[12].pizzasSold + hoursArrayRavenna[13].pizzasSold + hoursArrayRavenna[14].pizzasSold + hoursArrayRavenna[15].pizzasSold + hoursArrayRavenna[16].pizzasSold + hoursArrayRavenna[17].pizzasSold;
}

console.log(pizzaOdysseysRav);

var addPO = document.getElementById('pizzaodysseys');
var totalPO = document.createElement('ul');
var totalPizzaOdysseys = ((pizzaOdysseysBal + pizzaOdysseysFH + pizzaOdysseysIntD + pizzaOdysseysSLU + pizzaOdysseysGT + pizzaOdysseysRav) * 6);

//totalPO.textcontent = (totalPizzaOdysseys + ' happy pizza odysseys this week!');
//addPO.appendChild(totalPO);
