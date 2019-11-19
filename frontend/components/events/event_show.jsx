import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    parseDT() {
        return ("parsed date and time")
    }

    parseHeaderDate() {
        return ("header date")
    }

    parseHeaderPrice() {
        return ("header price range")
    }

    parseHeaderTitle() {
        return ("header title")
    }


    parseRefund() {
        return ("parsed refund")
    }
    
    parseTags() {
        const tags = this.props.currentEvent.tags;
        let tagsToo = Object.keys(tags);
        let tagsOutput = [];
        tagsToo.forEach((tag, i) => {
            tagsOutput.push(<div className="event-tag-container"><li key={i} className="event-tag">{tag}</li></div>)
            
        })
        return <ul>{tagsOutput}</ul>
    }

    parseTourguide() {
        return ("parsed Tourguide")
    }

    render() {
        if (!this.props.currentEvent) {
            return null
        }
        
        const pTg = `${this.parseTourguide()}`
        const dt = `${this.props.currentEvent.start_time} - ${this.props.currentEvent.end_time}`
        // debugger;
        return (<div className="show-page">
            <div className="event-container">
                <div className="event-header">
                    <div className="event-header-image"><img src={this.props.currentEvent.event_image}/></div>
                    <div className="event-header-details">
                        <div className="event-header-date">{this.parseHeaderDate()}</div>
                        <div className="event-header-title">{this.parseHeaderTitle()}</div>
                        <div className="event-header-title">{this.parseHeaderPrice()}</div>
                    </div>
                </div>
                <div className="event-midbar">
                    <div className="event-midbar-share midbar-share-icon"></div>
                    <div className="event-midbar-like midbar-like-icon"></div>
                    <div className="event-midbar-event-info">
                        <div>{this.props.currentEvent.event_title}</div>
                        <div>{this.props.currentEvent.event_date}</div>
                    </div>
                    <div className="event-midbar-ticket-price">{this.parseHeaderPrice()}</div>
                    <div className="event-midbar-tickets"><div>Tickets</div></div>
                </div>
                <div className="event-body">
                    <div className="event-body-description">
                        <div className="event-body-description-title">{this.props.currentEvent.event_title}</div>
                        <div className="event-body-description-about">
                            <h2>About this event</h2>
                            <p>{this.props.currentEvent.event_description}</p>
                        </div>
                        <div className="event-body-description-tags">{this.parseTags()}</div>
                        <div className="event-body-description-share">Share</div>
                    </div>
                    <div className="event-body-sidebar">
                        <div className="event-body-sidebar-details">
                            <div className="event-body-sidebar-details-tourguide sidebar-element"><span>Tourguide</span>
                                <div className="side-detail"><a href="#">{pTg}</a></div>
                            </div>
                            <div className="event-body-sidebar-details-date sidebar-element"><span>Date and Time</span>
                                <div className="side-detail">{this.parseDT()}</div>
                            </div>
                            <div className="event-body-sidebar-details-location sidebar-element"><span>Location</span>
                                <div className="side-detail">{this.props.currentEvent.location}</div>
                            </div>
                            <div className="event-body-sidebar-details-refund sidebar-element"><span>Refund Policy</span>
                                <div className="side-detail">{this.parseRefund()}</div>
                            </div>
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
            </div>
        </div>)
    }
    
}

export default EventShow;