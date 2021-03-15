import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useHistory } from "react-router-dom";
import InputText from "../inputText";
import Alert from "../alert";
import "./loginCard.scss"

const LoginCard = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { loginEmailPassword } = useAuth();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginInput;

  const handleChange = (event) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      await loginEmailPassword(email, password);
      history.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && <Alert type="danger" label={error} />}
      <div className="d-flex flex-column align-items-center log-in-card p-3 rounded ">
        <h1>Log In</h1>
        <form className="d-flex flex-column">
          <InputText
            type="email"
            label="Email"
            placeholder="Enter your email"
            defaultValue={email}
            onChange={handleChange}
            name="email"
            grey
            rounded
          />
          <InputText
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
            name="password"
            grey
            rounded
          />
          <InputText
            type="submit"
            defaultValue="Login"
            onClick={handleLogin}
            rounded
          />
        </form>
      </div>
    </>
  )
}

export default LoginCard;