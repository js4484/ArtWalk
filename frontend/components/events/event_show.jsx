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
                <div className="event-body-sidebar"></div>

            </div>
        
        
        </div>)
    }
    
}

export default EventShow;