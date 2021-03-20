import classNames from 'classnames';
import "./card.scss"

const Card = ({ name, date, category, daysLeft }) => {
  return (
    <div className={classNames('day-card mt-3 p-3 rounded align-items-center justify-content-between', (category === 'Family Event') ? 'primary-bg-color' : 'secondary-bg-color', (daysLeft < 0 ? 'd-none' : 'd-flex'))}>
      <div>
        <h3 className="day-card__header-title">Days until</h3>
        <h1 className="day-card__event-title">{name}</h1>
        <div className="d-flex">
          <h6 className="day-card__subtitle mr-2">{date}</h6>
          <h6 className="day-card__subtitle mr-2">•</h6>
          <h6 className="day-card__subtitle font-italic">{category}</h6>
        </div>
      </div>
      <h5 className="day-card__days-text p-3 rounded">{daysLeft}</h5>
    </div >
  )
}

export default Card;