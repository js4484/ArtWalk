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

        if (Object.keys(this.props.events).length < 1) {
            return <div>Loading...</div>
        }


        // return <div>Index Page</div>
        

        return (<div className="show-page">
            <div className="event-index-container">
                <h1>Tours in NYC</h1>
                <div className="events-box to-flex-row">
                {Object.values(this.props.events).map(event => (
                    <EventIndexItem
                        event={event}
                        key={event.id}
                        history={this.props.history}
                    />
                ))}
                </div>
            </div>
        </div>)
    };
};

export default EventIndex;