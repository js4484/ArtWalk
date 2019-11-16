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
        return (<div>{id}</div>)
    }
    
}

export default EventShow;