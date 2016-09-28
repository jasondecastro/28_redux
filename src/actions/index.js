export function fetchCats() {
  const cats = [{id: 1, name: 'Maru'}]
  return {
    type: 'FETCH_CATS',
    payload: cats
  }
}

export function fetchDogs() {
  const dogs = [{id: 1, name: 'Bobby'}]
  return {
    type: 'ADD_DOGS',
    payload: dogs
  }
}