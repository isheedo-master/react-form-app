import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { TYPES } from './actions';

function entries(state = [], action) {
  switch (action.type) { //eslint-disable-line
    case TYPES.SET_ENTRIES:
      return [...state, action.entries];
  }

  return state;
}

const reducer = combineReducers({
  form: reduxFormReducer,
  entries,
});

const store = createStore(reducer);

export default store;
