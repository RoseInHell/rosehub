import { Map } from 'immutable';

const defaultState = Map({
  test: []
})


function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'test':
      return state.set("test", action.test);
    default:
      return state;
  }
}

export default reducer;