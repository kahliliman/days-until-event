import { Card } from "../../components"
import "../../assets/scss/index.scss"

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default HomePage