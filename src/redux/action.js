export const SET_NAME = 'SET_NAME';
export const SET_ACCOUNT_NAME = 'SET_ACCOUNT_NAME';
export const SET_BIO = 'SET_BIO';
export const SET_CHANGEIMAGE = 'SET_CHANGEIMAGE';
export const ADD_POST = 'ADD_POST';
export const ADD_REELS = 'ADD_REELS';

export const setName = name => ({
  type: SET_NAME,
  payload: name,
});

export const setAccountName = accountname => ({
  type: SET_ACCOUNT_NAME,
  payload: accountname,
});

export const setBio = bio => ({
  type: SET_BIO,
  payload: bio,
});

export const setChangeImage = changeImage => ({
  type: SET_CHANGEIMAGE,
  payload: changeImage,
});

export const addPost = data => ({
  type: ADD_POST,
  payload: data,
});

export const addReels = reelsVideo => ({
  type: ADD_REELS,
  payload: reelsVideo,
});
