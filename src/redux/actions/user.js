import TYPES from '../actionTypes';

function setUserInfo(payload) {
  // userStorage.set(payload);
  return {
    type: TYPES.SET_USER_INFO,
    payload,
  };
}

function toggleAuthModal(payload) {
  const type = payload === 1 ? TYPES.SHOW_AUTH_MODAL : TYPES.HIDE_AUTH_MODAL;
  return {
    type,
  };
}

// eslint-disable-next-line
export { setUserInfo, toggleAuthModal };
