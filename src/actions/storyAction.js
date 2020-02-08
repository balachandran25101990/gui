import axios from "axios"
import config from "../config"
import { getToken } from "../utils"
import { 
    GET_ALL_STORIES,
    GET_MY_STORIES,
    DELETE_STORY
 } from "../const"

export function getAllStories() {
    const api = config.sm+"stories"
    const token = getToken()
    return {
        type: GET_ALL_STORIES,
        payload: axios.get(api, { headers: {"auth-token" : `${token}`} })
    }
}

export function getMyStories() {
    const api = config.sm+"myStories"
    const token = getToken()
    return {
        type: GET_MY_STORIES,
        payload: axios.get(api, { headers: {"auth-token" : `${token}`} })
    }
}

export function deleteStory(storyId) {
    const api = config.sm+"deleteStory"
    const token = getToken()
    const deleteData = { storyId }
    return {
        type: DELETE_STORY,
        payload: axios.post(api, deleteData, { headers: {"auth-token" : `${token}`} })
    }
}