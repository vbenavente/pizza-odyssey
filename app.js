var ballard, firstHill, theIntDist, southLakeUnion, georgeTown, Ravenna, newStoreInfo, newLocation;
var pizzaTable;
var pizzaodysseysID = document.getElementById('pizzaodysseys');
var pizzaOdyssey = 0;
var createAddStoreForm = document.getElementById('form');
var check = document.getElementById('salesbody');

function enterNumbersOnly (event){
  if (isNaN(parseInt(event.target.minPizzaSold8am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold8am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade8am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade8am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold9am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold9am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade9am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade9am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold10am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold10am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade10am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade10am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold11am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold11am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade11am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade11am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSoldnoon.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSoldnoon.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMadenoon.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMadenoon.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold1pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold1pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade1pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade1pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold2pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold2pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade2pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade2pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold3pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold3pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade3pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade3pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold4pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold4pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade4pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade4pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold5pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold5pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade5pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade5pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold6pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold6pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade6pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade6pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold7pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold7pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade7pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade7pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold8pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold8pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade8pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade8pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold9pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold9pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade9pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade9pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold10pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold10pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade10pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade10pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold11pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold11pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade11pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade11pm.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSoldmidnight.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSoldmidnight.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMademidnight.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMademidnight.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.minPizzaSold1am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.maxPizzaSold1am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  } if (isNaN(parseInt(event.target.minDeliveriesMade1am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }if (isNaN(parseInt(event.target.maxDeliveriesMade1am.value)) === true){
    alert('Please enter numbers for min and max I can fix your times! If you don\'t have data enter 0');
  }else{ collectAddStoreInfoFromForm();
  }
}

function collectAddStoreInfoFromForm(){
  event.preventDefault();

  var addstore = document.getElementById('addstore');

  var getLocation = event.target.getLocation.value;
  console.log(getLocation);
  var time8am = '8:00am';
  var minPizzaSold8am = parseInt(event.target.minPizzaSold8am.value);
  var maxPizzaSold8am = parseInt(event.target.maxPizzaSold8am.value);
  var minDeliveriesMade8am = parseInt(event.target.minDeliveriesMade8am.value);
  var maxDeliveriesMade8am = parseInt(event.target.maxDeliveriesMade8am.value);
  console.log(time8am, minPizzaSold8am, maxPizzaSold8am, minDeliveriesMade8am, maxDeliveriesMade8am);

  var time9am = '9:00am';
  var minPizzaSold9am = parseInt(event.target.minPizzaSold9am.value);
  var maxPizzaSold9am = parseInt(event.target.maxPizzaSold9am.value);
  var minDeliveriesMade9am = parseInt(event.target.minDeliveriesMade9am.value);
  var maxDeliveriesMade9am = parseInt(event.target.maxDeliveriesMade9am.value);
  console.log(time9am, minPizzaSold9am, maxPizzaSold9am, minDeliveriesMade9am, maxDeliveriesMade9am);

  var time10am = '10:00am';
  var minPizzaSold10am = parseInt(event.target.minPizzaSold10am.value);
  var maxPizzaSold10am = parseInt(event.target.maxPizzaSold10am.value);
  var minDeliveriesMade10am = parseInt(event.target.minDeliveriesMade10am.value);
  var maxDeliveriesMade10am = parseInt(event.target.maxDeliveriesMade10am.value);
  console.log(time10am, minPizzaSold10am, maxPizzaSold10am, minDeliveriesMade10am, maxDeliveriesMade10am);

  var time11am = '11:00am';
  var minPizzaSold11am = parseInt(event.target.minPizzaSold11am.value);
  var maxPizzaSold11am = parseInt(event.target.maxPizzaSold11am.value);
  var minDeliveriesMade11am = parseInt(event.target.minDeliveriesMade11am.value);
  var maxDeliveriesMade11am = parseInt(event.target.maxDeliveriesMade11am.value);
  console.log(time11am, minPizzaSold11am, maxPizzaSold11am, minDeliveriesMade11am, maxDeliveriesMade11am);

  var timenoon = 'noon';
  var minPizzaSoldnoon = parseInt(event.target.minPizzaSoldnoon.value);
  var maxPizzaSoldnoon = parseInt(event.target.maxPizzaSoldnoon.value);
  var minDeliveriesMadenoon = parseInt(event.target.minDeliveriesMadenoon.value);
  var maxDeliveriesMadenoon = parseInt(event.target.maxDeliveriesMadenoon.value);
  console.log(timenoon, minPizzaSoldnoon, maxPizzaSoldnoon, minDeliveriesMadenoon, maxDeliveriesMadenoon);

  var time1pm = '1:00pm';
  var minPizzaSold1pm = parseInt(event.target.minPizzaSold1pm.value);
  var maxPizzaSold1pm = parseInt(event.target.maxPizzaSold1pm.value);
  var minDeliveriesMade1pm = parseInt(event.target.minDeliveriesMade1pm.value);
  var maxDeliveriesMade1pm = parseInt(event.target.maxDeliveriesMade1pm.value);
  console.log(time1pm, minPizzaSold1pm, maxPizzaSold1pm, minDeliveriesMade1pm, maxDeliveriesMade1pm);

  var time2pm = '2:00pm';
  var minPizzaSold2pm = parseInt(event.target.minPizzaSold2pm.value);
  var maxPizzaSold2pm = parseInt(event.target.maxPizzaSold2pm.value);
  var minDeliveriesMade2pm = parseInt(event.target.minDeliveriesMade2pm.value);
  var maxDeliveriesMade2pm = parseInt(event.target.maxDeliveriesMade2pm.value);
  console.log(time2pm, minPizzaSold2pm, maxPizzaSold2pm, minDeliveriesMade2pm, maxDeliveriesMade2pm);

  var time3pm = '3:00pm';
  var minPizzaSold3pm = parseInt(event.target.minPizzaSold3pm.value);
  var maxPizzaSold3pm = parseInt(event.target.maxPizzaSold3pm.value);
  var minDeliveriesMade3pm = parseInt(event.target.minDeliveriesMade3pm.value);
  var maxDeliveriesMade3pm = parseInt(event.target.maxDeliveriesMade3pm.value);
  console.log(time3pm, minPizzaSold3pm, maxPizzaSold3pm, minDeliveriesMade3pm, maxDeliveriesMade3pm);

  var time4pm = '4:00pm';
  var minPizzaSold4pm = parseInt(event.target.minPizzaSold4pm.value);
  var maxPizzaSold4pm = parseInt(event.target.maxPizzaSold4pm.value);
  var minDeliveriesMade4pm = parseInt(event.target.minDeliveriesMade4pm.value);
  var maxDeliveriesMade4pm = parseInt(event.target.maxDeliveriesMade4pm.value);
  console.log(time4pm, minPizzaSold4pm, maxPizzaSold4pm, minDeliveriesMade4pm, maxDeliveriesMade4pm);

  var time5pm = '5:00pm';
  var minPizzaSold5pm = parseInt(event.target.minPizzaSold5pm.value);
  var maxPizzaSold5pm = parseInt(event.target.maxPizzaSold5pm.value);
  var minDeliveriesMade5pm = parseInt(event.target.minDeliveriesMade5pm.value);
  var maxDeliveriesMade5pm = parseInt(event.target.maxDeliveriesMade5pm.value);
  console.log(time5pm, minPizzaSold5pm, maxPizzaSold5pm, minDeliveriesMade5pm, maxDeliveriesMade5pm);

  var time6pm = '6:00pm';
  var minPizzaSold6pm = parseInt(event.target.minPizzaSold6pm.value);
  var maxPizzaSold6pm = parseInt(event.target.maxPizzaSold6pm.value);
  var minDeliveriesMade6pm = parseInt(event.target.minDeliveriesMade6pm.value);
  var maxDeliveriesMade6pm = parseInt(event.target.maxDeliveriesMade6pm.value);
  console.log(time6pm, minPizzaSold6pm, maxPizzaSold6pm, minDeliveriesMade6pm, maxDeliveriesMade6pm);

  var time7pm = '7:00pm';
  var minPizzaSold7pm = parseInt(event.target.minPizzaSold7pm.value);
  var maxPizzaSold7pm = parseInt(event.target.maxPizzaSold7pm.value);
  var minDeliveriesMade7pm = parseInt(event.target.minDeliveriesMade7pm.value);
  var maxDeliveriesMade7pm = parseInt(event.target.maxDeliveriesMade7pm.value);
  console.log(time7pm, minPizzaSold7pm, maxPizzaSold7pm, minDeliveriesMade7pm, maxDeliveriesMade7pm);

  var time8pm = '8:00pm';
  var minPizzaSold8pm = parseInt(event.target.minPizzaSold8pm.value);
  var maxPizzaSold8pm = parseInt(event.target.maxPizzaSold8pm.value);
  var minDeliveriesMade8pm = parseInt(event.target.minDeliveriesMade8pm.value);
  var maxDeliveriesMade8pm = parseInt(event.target.maxDeliveriesMade8pm.value);
  console.log(time8pm, minPizzaSold8pm, maxPizzaSold8pm, minDeliveriesMade8pm, maxDeliveriesMade8pm);

  var time9pm = '9:00pm';
  var minPizzaSold9pm = parseInt(event.target.minPizzaSold9pm.value);
  var maxPizzaSold9pm = parseInt(event.target.maxPizzaSold9pm.value);
  var minDeliveriesMade9pm = parseInt(event.target.minDeliveriesMade9pm.value);
  var maxDeliveriesMade9pm = parseInt(event.target.maxDeliveriesMade9pm.value);
  console.log(time9pm, minPizzaSold9pm, maxPizzaSold9pm, minDeliveriesMade9pm, maxDeliveriesMade9pm);

  var time10pm = '10:00pm';
  var minPizzaSold10pm = parseInt(event.target.minPizzaSold10pm.value);
  var maxPizzaSold10pm = parseInt(event.target.maxPizzaSold10pm.value);
  var minDeliveriesMade10pm = parseInt(event.target.minDeliveriesMade10pm.value);
  var maxDeliveriesMade10pm = parseInt(event.target.maxDeliveriesMade10pm.value);
  console.log(time10pm, minPizzaSold10pm, maxPizzaSold10pm, minDeliveriesMade10pm, maxDeliveriesMade10pm);

  var time11pm = '11:00pm';
  var minPizzaSold11pm = parseInt(event.target.minPizzaSold11pm.value);
  var maxPizzaSold11pm = parseInt(event.target.maxPizzaSold11pm.value);
  var minDeliveriesMade11pm = parseInt(event.target.minDeliveriesMade11pm.value);
  var maxDeliveriesMade11pm = parseInt(event.target.maxDeliveriesMade11pm.value);
  console.log(time11pm, minPizzaSold11pm, maxPizzaSold11pm, minDeliveriesMade11pm, maxDeliveriesMade11pm);

  var timemidnight = 'midnight';
  var minPizzaSoldmidnight = parseInt(event.target.minPizzaSoldmidnight.value);
  var maxPizzaSoldmidnight = parseInt(event.target.maxPizzaSoldmidnight.value);
  var minDeliveriesMademidnight = parseInt(event.target.minDeliveriesMademidnight.value);
  var maxDeliveriesMademidnight = parseInt(event.target.maxDeliveriesMademidnight.value);
  console.log(timemidnight, minPizzaSoldmidnight, maxPizzaSoldmidnight, minDeliveriesMademidnight, maxDeliveriesMademidnight);

  var time1am = '1:00am';
  var minPizzaSold1am = parseInt(event.target.minPizzaSold1am.value);
  var maxPizzaSold1am = parseInt(event.target.maxPizzaSold1am.value);
  var minDeliveriesMade1am = parseInt(event.target.minDeliveriesMade1am.value);
  var maxDeliveriesMade1am = parseInt(event.target.maxDeliveriesMade1am.value);
  console.log(time1am, minPizzaSold1am, maxPizzaSold1am, minDeliveriesMade1am, maxDeliveriesMade1am);

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function CityLocation(name){
    this.name = name;
    this.hourlyLocationData = [];
    this.HeaderData = [['Time'], ['Pizzas Sold'], ['Pizzas Delivered'], ['Drivers Recommended']];
    console.log(this.name, this.hourlyLocationData, this.HeaderData);
  }

  CityLocation.prototype.pushHourlyData = function(data){
    this.hourlyLocationData.push(data);
  };

  function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
    this.time = time;
    this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
    this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
    this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
    console.log(this.time, this.pizzasSold, this.deliveriesMade, this.driversNeeded);
  }

  newLocation = new CityLocation(getLocation);
  newLocation.pushHourlyData(new HourlyData(time8am, minPizzaSold8am, maxPizzaSold8am, minDeliveriesMade8am, maxDeliveriesMade8am));
  newLocation.pushHourlyData(new HourlyData(time9am, minPizzaSold9am, maxPizzaSold9am, minDeliveriesMade9am, maxDeliveriesMade9am));
  newLocation.pushHourlyData(new HourlyData(time10am, minPizzaSold10am, maxPizzaSold10am, minDeliveriesMade10am, maxDeliveriesMade10am));
  newLocation.pushHourlyData(new HourlyData(time11am, minPizzaSold11am, maxPizzaSold11am, minDeliveriesMade11am, maxDeliveriesMade11am));
  newLocation.pushHourlyData(new HourlyData(timenoon, minPizzaSoldnoon, maxPizzaSoldnoon, minDeliveriesMadenoon, maxDeliveriesMadenoon));
  newLocation.pushHourlyData(new HourlyData(time1pm, minPizzaSold1pm, maxPizzaSold1pm, minDeliveriesMade1pm, maxDeliveriesMade1pm));
  newLocation.pushHourlyData(new HourlyData(time2pm, minPizzaSold2pm, maxPizzaSold2pm, minDeliveriesMade2pm, maxDeliveriesMade2pm));
  newLocation.pushHourlyData(new HourlyData(time3pm, minPizzaSold3pm, maxPizzaSold3pm, minDeliveriesMade3pm, maxDeliveriesMade3pm));
  newLocation.pushHourlyData(new HourlyData(time4pm, minPizzaSold4pm, maxPizzaSold4pm, minDeliveriesMade4pm, maxDeliveriesMade4pm));
  newLocation.pushHourlyData(new HourlyData(time5pm, minPizzaSold5pm, maxPizzaSold5pm, minDeliveriesMade5pm, maxDeliveriesMade5pm));
  newLocation.pushHourlyData(new HourlyData(time6pm, minPizzaSold6pm, maxPizzaSold6pm, minDeliveriesMade6pm, maxDeliveriesMade6pm));
  newLocation.pushHourlyData(new HourlyData(time7pm, minPizzaSold7pm, maxPizzaSold7pm, minDeliveriesMade7pm, maxDeliveriesMade7pm));
  newLocation.pushHourlyData(new HourlyData(time8pm, minPizzaSold8pm, maxPizzaSold8pm, minDeliveriesMade8pm, maxDeliveriesMade8pm));
  newLocation.pushHourlyData(new HourlyData(time9pm, minPizzaSold9pm, maxPizzaSold9pm, minDeliveriesMade9pm, maxDeliveriesMade9pm));
  newLocation.pushHourlyData(new HourlyData(time10pm, minPizzaSold10pm, maxPizzaSold10pm, minDeliveriesMade10pm, maxDeliveriesMade10pm));
  newLocation.pushHourlyData(new HourlyData(time11pm, minPizzaSold11pm, maxPizzaSold11pm, minDeliveriesMade11pm, maxDeliveriesMade11pm));
  newLocation.pushHourlyData(new HourlyData(timemidnight, minPizzaSoldmidnight, maxPizzaSoldmidnight, minDeliveriesMademidnight, maxDeliveriesMademidnight));
  newLocation.pushHourlyData(new HourlyData(time1am, minPizzaSold1am, maxPizzaSold1am, minDeliveriesMade1am, maxDeliveriesMade1am));

  var getLocationTitle = document.createElement('h1');
  getLocationTitle.textContent = getLocation;

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

  function makeTable(location, storeId){
    pizzaTable = document.getElementById(storeId);
    pizzaTable.appendChild(getLocationTitle);
    var fancyHeader = generateHeadingRow(['Time', 'Pizzas Sold', 'Pizzas Delivered', 'Drivers Recommended']);
    pizzaTable.appendChild(fancyHeader);
    for(var i = 0; i < location.hourlyLocationData.length; i++) {
      var fancyRow = generateDataRow([location.hourlyLocationData[i].time, location.hourlyLocationData[i].pizzasSold, location.hourlyLocationData[i].deliveriesMade, location.hourlyLocationData[i].driversNeeded]);
      pizzaTable.appendChild(fancyRow);
    }
  }

  makeTable(newLocation, 'addstore');
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CityLocation(name){
  this.name = name;
  this.hourlyLocationData = [];
  this.HeaderData = [['Time'], ['Pizzas Sold'], ['Pizzas Delivered'], ['Drivers Recommended']];
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

function pizzaSoldArray(store){
  var row = document.createElement('ul');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('li');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function makeTable(store, storeId){
  pizzaTable = document.getElementById(storeId);
  var fancyHeader = generateHeadingRow(['Time', 'Pizzas Sold', 'Pizzas Delivered', 'Drivers Recommended']);
  pizzaTable.appendChild(fancyHeader);
  for(var i = 0; i < store.hourlyLocationData.length; i++) {
    var fancyRow = generateDataRow([store.hourlyLocationData[i].time, store.hourlyLocationData[i].pizzasSold, store.hourlyLocationData[i].deliveriesMade, store.hourlyLocationData[i].driversNeeded]);
    pizzaTable.appendChild(fancyRow);
  }
}

function totalPizzas(store){
  console.log('store in total pizzas: ', store);
  for(var i = 0; i < store.hourlyLocationData.length; i++){
    pizzaOdyssey += store.hourlyLocationData[i].pizzasSold;
  }
}

if(pizzaodysseysID){
  totalPizzas(ballard);
  totalPizzas(firstHill);
  totalPizzas(theIntDist);
  totalPizzas(southLakeUnion);
  totalPizzas(georgeTown);
  totalPizzas(Ravenna);
  pizzaodysseysID.textContent = ((pizzaOdyssey * 6) + ' total pizza odysseys this week.');
}

console.log('ballard is', ballard);
makeTable(ballard, 'ballard');
makeTable(firstHill, 'firsthill');
makeTable(theIntDist, 'intdist');
makeTable(southLakeUnion, 'slu');
makeTable(georgeTown, 'georgetown');
makeTable(Ravenna, 'ravenna');

createAddStoreForm.addEventListener('submit', enterNumbersOnly);
