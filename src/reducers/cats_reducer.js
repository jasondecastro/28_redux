<<<<<<< HEAD
export default function catsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_CATS':
      return action.payload
    default:
      return state
  }
}
=======
export default function catsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CATS':
      return action.payload;
    default:
      return state;
  }
};
>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b
