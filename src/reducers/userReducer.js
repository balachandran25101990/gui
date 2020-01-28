import { isEmpty } from "lodash"
import { 
  SET_CURRENT_USER,
 } from "../const";

const initialState = {
  userId: "",
  isAuthenticated: false
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
    default:
      return state;
  }
}