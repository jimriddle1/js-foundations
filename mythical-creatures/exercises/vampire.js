function createVampire(name, pet = 'bat'){
  const vampire = {name: name, pet: pet, thirsty: true, ouncesDrank: 0}
  return vampire
}

function encounterDeliciousVictim(vampire){
  if (vampire.thirsty){
    return 'I WANT TO SUCK YOUR BLOOD!'
  }else{
    return 'No thanks, I am too full.'
  }
}

function drink(vampire){
  drankVamp = vampire
  if (drankVamp.ouncesDrank != 50){
    drankVamp.ouncesDrank += 10
  }
  else{
    drankVamp.thirsty = false
  }

  if (drankVamp.ouncesDrank == 50){
    drankVamp.thirsty = false
  }


  return drankVamp
}

module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}