import React from 'react';
import Modal from '../modal/modal.jsx';

const monthHash = { "01": "JAN", "02": "FEB", "03": "MAR", "04": "APR", "05": "MAY", "06": "JUN", "07": "JUL", "08": "AUG", "09": "SEP", "10": "OCT", "11": "NOV", "12": "DEC" };
const monthHash2 = { "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "Juny", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December" };

const timeHash = {
    "0000": "12:00 AM",
    "0200": "02:00 AM",
    "0300": "03:00 AM",
    "0400": "04:00 AM",
    "0500": "05:00 AM",
    "0600": "06:00 AM",
    "0700": "07:00 AM",
    "0800": "08:00 AM",
    "0900": "09:00 AM",
    "1000": "10:00 AM",
    "1100": "11:00 AM",
    "1200": "12:00 PM",
    "1300": "01:00 PM",
    "1400": "02:00 PM",
    "1500": "03:00 PM",
    "1600": "04:00 PM",
    "1700": "05:00 PM",
    "1800": "06:00 PM",
    "1900": "07:00 PM",
    "2000": "08:00 PM",
    "2100": "09:00 PM",
    "2200": "10:00 PM",
    "2300": "11:00 PM",
    "2400": "12:00 AM"
}

const refundHash = {
    0: "No Refunds",
    1: "No Refunds",
    2: "No Refunds",
    3: "No Refunds",
    4: "No Refunds"
}

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, modalOpen: false};
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    };


    componentDidMount() {

        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            this.setState({loading: false});
        });
    }

    makeMidbarTickets() {
        let output;

        if (this.props.currentEvent.tickets_sold < this.props.currentEvent.ticket_num) {
            output = (<div className="event-midbar-tickets" onClick={this.openModal}><div>Tickets</div></div>)
        } else {
            output = (<div className="event-midbar-tickets disabled"><div>Sold Out</div></div>)
        }
        return output;
    }

    openModal() {
        this.setState({modalOpen: true});
    }

    closeModal(){
        
        this.setState({modalOpen: false});
    }

    parseDT() {

        const startMonth = monthHash2[this.props.currentEvent.event_date.split('-')[1]];
        const endMonth = monthHash2[this.props.currentEvent.event_date.split('-')[1]];
        const startTime = timeHash[this.props.currentEvent.start_time];
        const endTime = timeHash[this.props.currentEvent.end_time];
        const startDate = this.props.currentEvent.event_date.split('-')[2];
        const endDate = this.props.currentEvent.event_date.split('-')[2];

        const startOutput = `${startMonth} ${startDate}, ${startTime} -`;
        const endOutput = `${endMonth} ${endDate}, ${endTime} -`;

        return (<div className="to-flex-column">
            <div>{startOutput}</div>
            <div>{endOutput}</div>
        </div>

        )
    }

    parseFAQs(){
        if (!this.props.currentEvent.add_faqs) {
            return <div></div>
        } else {
            const faqs = this.props.currentEvent.faqs;
            let faqQs = Object.keys(faqs);
            let faqAs = Object.values(faqs);
            let output = [];
            faqQs.forEach((ele, i) => {
                output.push(<div className="faq-douple to-flex-column">
                    <div className="faq-q">Q: {ele}</div>
                    <div className="faq-a">A: {faqAs[i]}</div>
                </div>)
            })
            return <div>FAQs: {output}</div>;
        }


        {
            Object.values(this.props.events).map(event => (
                <EventIndexItem
                    event={event}
                    key={event.id}
                    history={this.props.history}
                />
            ))
        }
        

    }

    parseHeaderDate() {
        return(
            <div className="ehd-container">
                <div className="ehd-month">{monthHash[this.props.currentEvent.event_date.split('-')[1]]}</div>
                <div className="ehd-day">{this.props.currentEvent.event_date.split('-')[2]}</div>
            </div>
        );
    }

    parseHeaderPrice() {
        let price = this.props.currentEvent.ticket_price;
        if (this.props.currentEvent.ticket_price === 0) {
            price = "FREE"
        }

        return (`${price}`)
    }

    parseHeaderTitle() {

        const name = `${this.props.currentEvent.organizerFirstName} ${this.props.currentEvent.organizerLastName}`
        const title = this.props.currentEvent.event_title;
        return (<div className="eht-container">
                <div className="eht-title">{title}</div>
                <div className="eht-organizer">{name}</div>
            </div>
        )
    }

    parseLocation() {
        const loc = this.props.currentEvent.location;
        return (<div className="sidebar-location">
            <div className="loc text-gray">{loc}</div>
            <div className="loc-link text-gray"><a href="#">See it on a Map</a></div>
        </div>
        )

    }

    parseRefund() {
        let refund = refundHash[this.props.currentEvent.refund_policy];
        return refund
    }
    
    parseTags() {
        const tags = this.props.currentEvent.tags;
        let tagsToo = Object.keys(tags);
        let tagsOutput = [];
        tagsToo.forEach((tag, i) => {
            tagsOutput.push(<div className="event-tag">{tag}</div>)
            
        })
        return <div>{tagsOutput}</div>
    }

    parseTourguide() {
        const name = `${this.props.currentEvent.organizerFirstName} ${this.props.currentEvent.organizerLastName}`
        return (<div className="">{name}</div>)
    }


    render() {
        if (this.state.loading) return null;

        let modal;
        if (this.state.modalOpen) {
            modal = <Modal eventId={this.props.match.params.eventId} closeModal={this.closeModal}/>;
        }
        const pTg = this.parseTourguide();
        const dt = `${this.props.currentEvent.start_time} - ${this.props.currentEvent.end_time}`
        return (<div className="show-page">
            <div className="event-container">
                <div className="event-header">
                    <div className="event-header-image" style={{ backgroundImage: `url(${this.props.currentEvent.event_image})`}}></div>
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
                    {this.makeMidbarTickets()}
                </div>
                <div className="event-body">
                    <div className="event-body-description">
                        <div className="event-body-description-title">{this.props.currentEvent.event_title}</div>
                        <div className="event-body-description-about">
                            <h4>About this event</h4>
                            <p>{this.props.currentEvent.event_description}</p>
                        </div>
                        <div className="event-body-description-faq-container">
                            {this.parseFAQs()}
                        </div>
                        <div className="event-body-description-tags"><div>Tags:</div>
                            {this.parseTags()}</div>
                        <div className="event-body-description-share">Share</div>
                    </div>
                    <div className="event-body-sidebar">
                        <div className="event-body-sidebar-details">
                            <div className="event-body-sidebar-details-tourguide sidebar-element"><span>Tourguide</span>
                                <div className="side-detail">{pTg}</div>
                            </div>
                            <div className="event-body-sidebar-details-date sidebar-element"><span>Date and Time</span>
                                <div className="side-detail">{this.parseDT()}</div>
                            </div>
                            <div className="event-body-sidebar-details-location sidebar-element"><span>Location</span>
                                <div className="side-detail">{this.parseLocation()}</div>
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
            {modal}
        </div>)
    }
    
}

export default EventShow;