export const SET_NAME = 'SET_NAME';
export const SET_ACCOUNT_NAME = 'SET_ACCOUNT_NAME';

export const setName = name => ({
  type: SET_NAME,
  payload: name,
});

export const setAccountName = accountname => ({
  type: SET_ACCOUNT_NAME,
  payload: accountname,
});
