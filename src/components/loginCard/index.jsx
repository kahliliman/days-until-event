import React, { useState, useCallback, useContext } from "react";
import { withRouter } from "react-router"
import { AuthContext } from "../../context/authContext";
import { Redirect } from "react-router-dom";
import "../../assets/scss/index.scss";
import "./loginCard.scss"
import app from "../../config/firebase";

const LoginCard = ({ history }) => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const handleChange = (event) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <>
    <div className="d-flex flex-column login-card">
      <h1 className="text-center font-weight-bold login--right__title">Login</h1>
      <form onSubmit={handleLogin} className="d-flex flex-column form">
        <label>
          Email
        </label>
          <input onChange={handleChange} name="email" type="email"  />
        <label>
          Password
        </label>
          <input onChange={handleChange} name="password" type="password"  />
        <button type="submit" className="btn btn-primary mt-3">Log in</button>
      </form>
    </div>
    </>
  );
}

export default withRouter(LoginCard)