
module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};

function createAirport(name, airlines = [], availableGates = 0){
  const airport = {name: name, airlines: airlines, availableGates: availableGates}
  return airport;
}

function welcomeGuests(airport){
  return "Welcome to " + airport.name + "!";
}

function landPlanes(airport, qty){
  let temp = airport.availableGates -= qty;
  if (temp >= 0){
    return "Success! Current availability is " + temp + ".";
  }
  else{
    airport.availableGates = 0;
    return "Oh no! Not enough gates available. Current overflow is " + temp * -1 + ".";
  }
  
}

function checkAirlineLocations(array, input_airline){
  placeholder = [];
  for (airport of array){
    for (airline of airport.airlines){
      if (airline == input_airline){
        placeholder.push(airport.name)
      }
    }
  }
  return placeholder;
}