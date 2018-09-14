function produceDrivingRange(distance) {

  return function(rangeOne, rangeTwo) {
  	let numberOne = parseInt(rangeOne.replace("th", ""));
  	let numberTwo = parseInt(rangeTwo.replace("th", ""));
  	let range = Math.abs(numberTwo - numberOne);
  	let difference = Math.abs(distance - range);
  	debugger;

    if (range > distance) {
    	return `${difference} blocks out of range`
    }
    else {
    	return `within range by ${difference}`
    };
  };
}

function produceTipCalculator(tip) {
  return function(dollars) {
    return dollars * tip;
  };
}

function createDriver () {
	let DriverId = 0;
	return class {
		constructor(name) {
			this.name = name;
			this.id = ++DriverId;
		}
	}
}
