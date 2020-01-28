import axios from "axios"
import jwt from "jsonwebtoken"

export const setAuthorization = (token) => {
    if(token) {
        axios.defaults.headers.common['auth-token'] = token
    }
    else {
        delete axios.defaults.headers.common['auth-token']
    }
}

export const auth = () => {
    const token = localStorage.getItem("jwtToken")
    if(token) {
        if(jwt.verify(token, 'pass'))
        return true
    }
    else {
        return false
    }
}

export const getToken = () => {
    const token = localStorage.getItem("jwtToken")
    if(token){
        return token
    }
}

export const logout = () => localStorage.removeItem('jwtToken');

