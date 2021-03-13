import "./loginCard.scss"

const Card = () => {
  return (
    <div className="d-flex flex-column align-items-center log-in-card p-3 rounded ">
      <h1>Log In</h1>
      <form className="d-flex flex-column">
        <label htmlFor="email">Email</label>
        <input type="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password"></input>
        <button className="btn btn-primary mt-3" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Card;