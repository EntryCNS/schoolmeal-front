import { combineReducers } from "redux";
import MealReducer from "./MealReducer";

const initialState = {
  signUpModal: false,
  ReqMealModal: false,
  isLoggedIn: true,
};

export const MODALTOGGLE = "MODAL_TOGGLE";
export const LOGGED = "LOGGED";
export const MEALMODALTOGGLE = "MEAL_MODAL_TOGGLE";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODALTOGGLE:
      return {
        ...state,
        signUpModal: !state.signUpModal,
      };
    case MEALMODALTOGGLE:
      return {
        ...state,
        ReqMealModal: !state.ReqMealModal,
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

const reducer = combineReducers({
  userReducer,
  MealReducer,
});

export default reducer;
