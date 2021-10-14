const initialState = {
  signUpModal: false,
  isLoggedIn: false,
};

export const MODALTOGGLE = "MODALTOGGLE";
export const LOGGED = "LOGGED";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODALTOGGLE:
      return {
        ...state,
        signUpModal: !state.signUpModal,
      };
    case LOGGED:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
