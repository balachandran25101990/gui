import React from "react"
import { Route, Redirect } from "react-router-dom"
import { auth } from "../utils"

const isLoggedIn = () => {
    const res = auth()
    return res
}

export const ProtectedRoute = ({ component: Component, auth, ...rest }) => 
    (
    <Route {...rest} render={(props) => (
        isLoggedIn()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )