import React from "react"
import axios from "axios"
import config from "../config"

export const authenticateUser = (email, password) => {
    const loginData = { email, password }
    return axios.post(config.um+'login', loginData)
}
export function logout() {
    localStorage.removeItem('user');
}
// export function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }