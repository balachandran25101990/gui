import axios from "axios"
import jwt from "jsonwebtoken"

export const setAuthorizationHeader = (token) => {
    if(token) {
        axios.defaults.headers.common['auth-token'] = token
    }
    else {
        delete axios.defaults.headers.common['auth-token']
    }
}

export const auth = () => {
    const token = localStorage.getItem("jwtToken")
    if (token) {
        if((jwt.decode(token).exp > Date.now() / 1000) && jwt.verify(token, 'pass')){
            return true
        }
        else {
            return false
        }
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
export const getUserId = () => {
    const token = getToken()
    return jwt.decode(token)._id
}

export const logout = () => localStorage.removeItem("jwtToken")

