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

// export const auth = () => {
//     const token = localStorage.getItem("jwtToken")
//     console.log(token)
//         if (token && (jwt.decode(token).exp > Date.now() / 1000)) {
//             if(jwt.verify(token, 'pass')) {
//                 console.log("t")
//                 console.log(jwt.decode(token).exp)
//                 console.log(Date.now() / 1000)
//                 return true
//             }
//             else {
//               console.log("fal")
//               return false
//             }
//           }
//           else {
//               console.log("falsy")
//               return false
//           }
//   }


export const auth = () => {
    const token = localStorage.getItem("jwtToken")
    console.log(token)
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

