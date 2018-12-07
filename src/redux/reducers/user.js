import TYPES from '../actionTypes';

const initialState = {
  userInfo: null,
  showAuthModal: true,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    case TYPES.SHOW_AUTH_MODAL:
      return {
        ...state,
        showAuthModal: true,
      };
    case TYPES.HIDE_AUTH_MODAL:
      return {
        ...state,
        showAuthModal: false,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default user;
