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

function inquirePlace(locations, place){
  for (location of locations){
    if (location == place){
      return "Yes, I have spent some time in " + place + "."
    }
  }

  return "No, I have never been to " + place + "."
} 

function findBatLovers(vampires){
  array = []
  for (vampire of vampires){
    if (vampire.pet == 'bat'){
      array.push(vampire.name)
    }
  }
  return array
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}