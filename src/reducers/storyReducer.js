import {
    GET_ALL_STORIES,
 } from "../const";

const initialState = {
  stories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES: {
      return {
        ...state,
        stories: action.payload.data
      }
    }
    default:
      return state;
  }
}