import { isEmpty } from "lodash"
import { 
  SET_CURRENT_USER,
  USER_REGISTARTION_SUCCESS
 } from "../const";

const initialState = {
  userId: "",
  isAuthenticated: false,
  registerSucess: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        userId: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      }
    }
    case USER_REGISTARTION_SUCCESS: {
      return {
        ...state,
        registerSucess: action.payload
      }
    }
    default:
      return state;
  }
}