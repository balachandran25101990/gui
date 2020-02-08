import {
  GET_ALL_STORIES_FULFILLED,
  GET_MY_STORIES_FULFILLED,
  DELETE_STORY_REJECTED,
  DELETE_STORY_FULFILLED,
 } from "../const";

const initialState = {
  stories: [],
  isStoryDeleted: false,
  isShowDeleteMessage: false,
  deleteMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES_FULFILLED: {
      return {
        ...state,
        stories: action.payload.data.stories
      }
    }
    case GET_MY_STORIES_FULFILLED: {
      return {
        ...state,
        stories: action.payload.data.stories,
      }
    }
    case DELETE_STORY_REJECTED: {
      return {
        ...state,
        isShowDeleteMessage: true,
        deleteMessage: action.payload.data.message
      }
    }
    case DELETE_STORY_FULFILLED: {
      return {
        ...state,
        isStoryDeleted: true,
        isShowDeleteMessage: true,
        deleteMessage: action.payload.data.message
      }
    }
    default:
      return state;
  }
}