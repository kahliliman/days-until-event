import LoginCard from "../../components/loginCard";
import "../../assets/scss/index.scss";

export default function LoginPage() {

  return (
    <div className="login">
      <div className="d-flex justify-content-center align-items-center login__container">
        <div className="login--right">
          <h1 className="text-center font-weight-bold login--right__title">
            Login
          </h1>
          <LoginCard  />
        </div>
      </div>
    </div>
  );
}
