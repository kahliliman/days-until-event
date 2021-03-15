import React, { useState } from "react";
import InputText from "../inputText";
import Alert from "../alert";
import { useAuth } from "../../context/authContext";
import { useHistory } from "react-router-dom";
import "../../assets/scss/index.scss";

export default function LoginCard() {
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

  // const handleGoogleLogin = async () => {
  //   try {
  //     await loginWithGoogle();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {error && <Alert type="danger" label={error} />}
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
      {/* <p className="text-center login--right__text">Or login with</p>
      <InputText
        onClick={handleGoogleLogin}
        type="submit"
        value="Google"
        google
        rounded
        disabled
      /> */}
    </>
  );
}
