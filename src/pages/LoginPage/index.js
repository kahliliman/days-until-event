import React, { useState } from "react";
import LoginCard from "../../components/loginCard";
// import { Link } from "react-router-dom";
import { InputText } from "../../components";
// import ResetPassword from "../../components/ResetPassword";
import "../../assets/scss/index.scss";

export default function LoginPage() {
  const [isLoginForm, setIsResetPassword] = useState(true);

  const toResetPasswordForm = () => setIsResetPassword(!isLoginForm);

  return (
    <div className="login">
      <div className="d-flex justify-content-center align-items-center login__container">
        <div className="login--right">
          <h1 className="text-center font-weight-bold login--right__title">
            Login
          </h1>
          {isLoginForm && <LoginCard />}
          {!isLoginForm && (
            <>
              {/* <ResetPassword />{" "} */}
              <InputText
                type="submit"
                value="Back"
                onClick={toResetPasswordForm}
                grey
                rounded
                disabled
              />
            </>
          )}
          {/* <p className="text-center login--right__registerText">
            You don't have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>{" "}
          </p>
          <hr className="bg-white w-75" />
          <p className="text-center login--right__registerText mt-3">
            Forgot your password?
            <span className="ml-1" onClick={toResetPasswordForm}>
              Reset Password
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}
