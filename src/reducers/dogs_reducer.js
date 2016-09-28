export default function dogsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_DOGS':
      return action.payload
    default:
      return state
  }
}