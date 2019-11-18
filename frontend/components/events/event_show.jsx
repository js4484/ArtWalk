import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    render() {
        if (!this.props.currentEvent) {
            return null
        }
        const id = `Event Id: ${this.props.currentEvent.id}`
        return (<div className="show-page">
            <div className="event-header">
                <div className="event-header-image"></div>
                <div className="event-header-details"></div>
            </div>
            <div className="evnt-midbar">
                <div className="event-midbar-share"></div>
                <div className="event-midbar-like"></div>
                <div className="event-midbar-event-info"></div>
                <div className="event-midbar-ticket-price"></div>
                <div className="event-midbar-tickets"></div>
            </div>
            <div className="event-body">
                <div className="event-body-description">
                    <div className="event-body-description-title"></div>
                    <div className="event-body-description-about">
                        <h2>About this event</h2>
                    </div>
                    <div className="event-body-description-tags">Tags</div>
                    <div className="event-body-description-share">Share</div>
                </div>
                <div className="event-body-sidebar">
                    <div className="event-body-sidebar-details">
                        <div className="event-body-sidebar-details-performers">Performers</div>
                        <div className="event-body-sidebar-details-date">Date and Time</div>
                        <div className="event-body-sidebar-details-location">Location</div>
                        <div className="event-body-sidebar-details-refund">Refund Policy</div>
                    </div>
                </div>
            </div>
            <div className="event-organizer-info"></div>
            <div className="event-map-info">
                <div className="event-map-map"></div>
                <div className="event-map-footer">
                    <div className="event-map-footer-details"></div>
                    <div className="event-map-footer-icons"></div>
                </div>
            </div>
        </div>)
    }
    
}

export default EventShow;