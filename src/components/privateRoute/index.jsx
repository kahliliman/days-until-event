import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../context/authContext";

export const PrivateRoute = ({ component: Component }) => {
  const currentUser = useAuth();

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