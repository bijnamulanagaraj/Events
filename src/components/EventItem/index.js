// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, activeId, registrationStatusDetails} = props
  const {id, imageUrl, name, location, registrationStatus} = itemDetails

  const addClass = id === activeId ? 'add-border' : ''

  const onClicked = () => {
    registrationStatusDetails(registrationStatus, id)
  }

  return (
    <li className="events-container">
      <button type="button" className="event-image-btn" onClick={onClicked}>
        <img src={imageUrl} className={`event-image ${addClass}`} alt="event" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
