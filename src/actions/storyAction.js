import axios from "axios"
import config from "../config"
import { getToken } from "../utils"
import { GET_ALL_STORIES } from "../const"

export function getAllStories() {
    const api = config.sm+"stories"
    const token = getToken()
    return {
        type: GET_ALL_STORIES,
        payload: axios.get(api, { headers: {"auth-token" : `${token}`} })
    }
}