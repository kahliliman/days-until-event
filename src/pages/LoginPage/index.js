import { Component } from "react"
import { LoginCard } from "../../components"
import "../../assets/scss/index.scss"

class LoginPage extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <LoginCard />
      </div>
    )
  }
}

export default LoginPage