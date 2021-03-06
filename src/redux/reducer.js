import {SET_NAME} from './action';
import {SET_ACCOUNT_NAME} from './action';
import {SET_BIO} from './action';
import {SET_CHANGEIMAGE} from './action';
import {ADD_POST} from './action';
import {ADD_REELS} from './action';
import {SAVE_ITEM} from './action';
import data from '../StaticDatas/Datas';
import videoData from '../StaticDatas/videoData';

const initialState = {
  name: 'Varsni',
  data: data,
  accountname: 'varsu11',
  bio: 'Good Vibes!!!',
  videoData: videoData,
  saveItem: [],
  changeImage:
    'https://images.unsplash.com/photo-1624887009213-040347b804c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80',
};

//console.log(initialState.saveItem, 'jjj');

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_ACCOUNT_NAME:
      return {...state, accountname: action.payload};
    case SET_BIO:
      return {...state, bio: action.payload};
    case SET_CHANGEIMAGE:
      return {...state, changeImage: action.payload};
    case SAVE_ITEM:
      //console.log(action.payload, 'jjj');
      return {...state, saveItem: [...state.saveItem, action.payload]};
    case ADD_POST:
      return {...state, data: [...state.data, action.payload]};
    case ADD_REELS:
      return {...state, videoData: [...state.videoData, action.payload]};
    default:
      return state;
  }
}

export default mainReducer;
