
module.exports = { 
  createAirport, 
  // welcomeGuests, 
  // landPlane, 
  // checkAirlineLocations
};

function createAirport(name, airlines = [], availableGates = 0){
  const airport = {name: name, airlines: airlines, availableGates: availableGates}
  return airport;
}