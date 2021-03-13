import "./card.scss"

const Card = () => {
  return (
    <div className="day-card mt-3 p-3 rounded d-flex align-items-center justify-content-between">
      <div>
        <h3 className="day-card__header-title">Days until</h3>
        <h1 className="day-card__event-title">Cicilan terakhir</h1>
        <div className="d-flex">
          <h5 className="day-card__subtitle mr-3">02-April-2021</h5>
          <h5 className="day-card__subtitle font-italic">Family Event</h5>
        </div>
      </div>
      <h5 className="day-card__days-text p-3 rounded">20</h5>
    </div>
  )
}

export default Card;