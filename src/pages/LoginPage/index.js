import LoginCard from "../../components/loginCard";
import "../../assets/scss/index.scss";

export default function LoginPage() {
  return (
    <div className="login">
      <div className="d-flex justify-content-center align-items-center login__container">
        <div className="login--right">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
