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

export const auth = (next) => {
    const token = localStorage.getItem("user")
    try{
        if (token && jwt.verify(token, 'pass') && jwt.decode(token).exp < Date.now() / 1000) {
            localStorage.clear();
            return false
          }
          else {
              return true
          }
        } catch {
            logout()
            return false
        }
  };

export const getToken = () => {
    const token = localStorage.getItem("jwtToken")
    if(token){
        return token
    }
}

export const logout = () => localStorage.clear()

