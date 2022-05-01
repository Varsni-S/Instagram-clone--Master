import {SET_NAME} from './action';
import {SET_ACCOUNT_NAME} from './action';

const initialState = {
  name: 'Varsni',
  accountname: 'varsu11',
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_ACCOUNT_NAME:
      return {...state, accountname: action.payload};

    default:
      return state;
  }
}

export default mainReducer;
