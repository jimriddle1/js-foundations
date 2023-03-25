function createDragon(input_name, input_rider, input_temperment){
  const dragon = {name: input_name, rider: input_rider, temperment: input_temperment, timesEaten: 0, hungry: true}
  return dragon
}

function greetRider(dragon){
  return "Hi, " + dragon.rider + "!"
}

function eat(input_dragon){
  dragon = input_dragon
  dragon.timesEaten += 1
  if (dragon.timesEaten >= 3){
    dragon.hungry = false
  }
  return dragon
}

function findFireBreathers(dragons){
  array = [];
  for (dragon of dragons){
    if(dragon.temperment == 'aggressive'){
      array.push(dragon)
    }
  }
  return array;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}