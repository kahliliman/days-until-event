import React from "react"
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component: Component }) => {
  const currentUser = null

  return (
    <Route>
      {(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }}
    </Route>
  )
}