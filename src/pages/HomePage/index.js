import { Component } from "react"
import { Card } from "../../components"
import "../../assets/scss/index.scss"
import data from "../../config/data/event.json"
import moment from "moment"
import app from "../../config/firebase"

class HomePage extends Component {
  state = {
    events: data.sort((a, b) => {
      return moment(a.date) - moment(b.date);
    })
  }

  daysLeftHandler = (date) => {
    const eventDate = moment(date);
    const todaysDate = moment();
    let diffDate = eventDate.diff(todaysDate, 'days') + 1;
    if (diffDate < 10 && diffDate >= 0) {
      diffDate = '0' + diffDate
    }

    return diffDate
  }


  render() {

    const events = (
      <div> {this.state.events.map((event, index) => {
        const daysLeft = this.daysLeftHandler(event.date)

        return <Card
          name={event.event}
          date={moment(event.date).format("MMMM Do YYYY")}
          category={event.category}
          key={event.event + event.date}
          daysLeft={daysLeft}
        />
      })}
      </div>
    )

    return (
      <div className="d-flex flex-column align-items-center mt-3" >
        {events}
        <button onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
    )
  }
}

export default HomePage