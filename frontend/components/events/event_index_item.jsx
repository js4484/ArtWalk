import React from 'react';
import { withRouter } from 'react-router-dom';


class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const eventId = this.props.event.id;
        // debugger;
        this.props.history.push(`/events/${eventId}`);

    }

    render() {
        const { event_title, location, event_date, start_time, event_image } = this.props.event;
        return (
            <div
                className="event-index-item to-flex-column"
                onClick={this.handleClick}
            >
                <div className="index-item-img" style={{ backgroundImage: `url(${event_image})` }}>
                </div>
                <div className="index-item-text to-flex-column">
                    <div className="index-item-date">{event_date}</div>
                    <div className="index-item-title">{event_title}</div>
                    <div className="index-item-location">{location}</div>

                </div>
            </div>
        );
    }
}

export default EventIndexItem;
