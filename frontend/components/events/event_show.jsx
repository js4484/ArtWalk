import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.currentEvent = this.props.currentEvent;
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.id);
    }

    render() {
        // debugger;
    return (<div>Event Id: {this.currentEvent}</div>)
    }
    
}

export default EventShow;