<<<<<<< HEAD
export function fetchCats() {
  const cats = [{id: 1, name: 'Maru'}]
=======
export function fetchCats(){
  const cats = [{id: 1, name: 'Maru'}, {id: 2, name: 'Grumpy Cat'}, {id: 3, name: 'Shadow'}];

>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b
  return {
    type: 'FETCH_CATS',
    payload: cats
  }
}

<<<<<<< HEAD
export function fetchDogs() {
  const dogs = [{id: 1, name: 'Bobby'}]
  return {
    type: 'ADD_DOGS',
    payload: dogs
  }
}
=======
export function fetchDogs(){
  const dogs = [{id: 1, name: 'Odie'}];

  return {
    type: 'FETCH_DOGS',
    payload: dogs
  }
}
>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b
