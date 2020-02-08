import {
  GET_ALL_STORIES_FULFILLED,
 } from "../const";

const initialState = {
  stories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES_FULFILLED: {
      return {
        ...state,
        stories: action.payload.data.stories
      }
    }
    default:
      return state;
  }
}