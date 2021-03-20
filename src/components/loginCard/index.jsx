import React, { useState, useCallback, useContext } from "react";
import { withRouter } from "react-router"
import { AuthContext } from "../../context/authContext";
import { Redirect } from "react-router-dom";
import "../../assets/scss/index.scss";
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
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input onChange={handleChange} name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input onChange={handleChange} name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default withRouter(LoginCard)