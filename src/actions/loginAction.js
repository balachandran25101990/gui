import axios from "axios"
import jwt from "jsonwebtoken"
import config from "../config"
import { setAuthorizationHeader } from "../utils"
import { SET_CURRENT_USER } from "../const"

export function authenticateUser(loginData) {
    return dispatch => {
        return axios.post(config.um+'login', loginData)
                    .then( (res) => {
                        const token = res.data.token
                        localStorage.setItem('jwtToken', token)
                        setAuthorizationHeader(token)
                        dispatch(setCurrentUser(jwt.decode(token)))
                    })
    }
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        payload: user._id
    }
}