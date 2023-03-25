function createHobbit(name = 'unknown', age = 0){
  const hobbit = {name: name, age: age, isAdult: false, isOld: false, acquaintances: []}
  return hobbit
}

function celebrateBirthday(hobbit){
  let older_hobbit = hobbit
  older_hobbit.age += 1
  if (older_hobbit.age >= 33){
    older_hobbit.isAdult = true
  }
  if (older_hobbit.age >= 101){
    older_hobbit.isOld = true
  }
  return older_hobbit
}

function getRing(hobbit){
  if (hobbit.name == 'Frodo'){
    return 'Here is the ring!'
  }else{
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, people_array){
  let socialHobbit = hobbit
  let array = hobbit.acquaintances
  for (people of people_array){
    array.push(people)
  }
  socialHobbit.acquaintances = array 
  return socialHobbit
}

function findFriends(hobbit){
  array = [];
  people = hobbit.acquaintances
  for (person of people){
    if(person.relationship == 'friend'){
      array.push(person.name)
    }
  }
  return array

}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}
