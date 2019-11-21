import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
    constructor(props) {
        super(props);

    };


    componentDidMount() {
        this.props.fetchEvents();
    };


    render() {
        // debugger;
        if (Object.keys(this.props.events).length < 1) {
            return <div>no events</div>
        }
        // debugger;

        // return <div>Index Page</div>
        

        return (<div>
            <h1>Events: </h1> 
            <div className="event-index-container to-flex-row">
                {Object.values(this.props.events).map(event => (
                    <EventIndexItem
                        event={event}
                        key={event.id}
                    />
                ))}
            </div>
        </div>)
    };
};

export default EventIndex;