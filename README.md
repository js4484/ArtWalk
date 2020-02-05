# ArtWalk

[Walk This Way! (Click Me)](https://art-walk.herokuapp.com/#/)

Welcome to ArtWalk, a single-page app that allows users to browse, and book tickets for, art tours around New York City. Based on Eventbrite, the website is largely available to any viewer, but one must be logged in to make any substantive changes.

<img src="https://i.ibb.co/kM9Tp9B/newindex.png" alt="newindex" border="0">

# Technologies Used
1. Javascript
2. Ruby on Rails
3. PostgreSQL
4. HTML
5. CSS

# Libraries Used
* React.js (incl. react-router-dom)
* Redux (incl. react-redux, redux-thunk middleware)
* Bcrypt for user authorization

## Features

### Ticket Interface


The ticket interface acts as a layer of protection, only allowing users who are logged in to reserve tickets.


<img src="https://i.ibb.co/1rcqnvV/newshow.png" alt="newshow" border="0">

If there is no current user, a basic informational modal will show. If the user has successfully submitted a form, a success message will show. Lastly, if there is a current user, and the event is not sold out (more on that below), the form to reserve tickets will show.

```javascript
    render() {
        if (!this.props.currentUserId) {
            return (<div className="ticket-form-container">
                      <div>Please Sign in to Reserve Tickets</div>
                </div>)}
        if (this.props.success.length > 0) {
            return(<div className="ticket-form-container to-flex-column">
                    {this.renderSuccess()}
                </div>)}

        return(<div className="ticket-form-container">
                <div className="ticket-button" onClick={this.processSubtractTicket}><div className="ticket-button-text">-</div></div>
                <div className="ticket-button"><div className="ticket-button-text">{this.processTicketNumber()}</div></div>
                <div className="ticket-button" onClick={this.processAddTicket}><div className="ticket-button-text">+</div></div>
                <form onSubmit={this.handleSubmit}>
                    <input className="ticket-form-btn" type="submit" value="Submit" />
                </form>
                </div>)}
  ```



.
<img src="https://i.ibb.co/j55pgkW/newplease.png" alt="newplease" border="0">
<img src="https://i.ibb.co/304510t/newtickets.png" alt="newtickets" border="0">
<img src="https://i.ibb.co/gZXFQqb/newcongrats.png" alt="newcongrats" border="0">

If tickets for an event are sold out, the button will change and become inoperable

```javascript
makeMidbarTickets() {
        let output;

        if (this.props.currentEvent.tickets_sold < this.props.currentEvent.ticket_num) {
            output = (<div className="event-midbar-tickets" onClick={this.openModal}><div>Tickets</div></div>)
        } else {
            output = (<div className="event-midbar-tickets disabled"><div>Sold Out</div></div>)
        }
        return output;
    }
   ```

 .
<img src="https://i.ibb.co/VM7jt3p/newsold.png" alt="newsold" border="0">

The tickets_sold props comes from database relations, which is compared to the max tickets allowed for the specific event. Event.tickets_sold simply works through an association with tickets.

```ruby

class Event < ApplicationRecord
    has_many :tickets

    def tickets_sold
        self.tickets.count
    end
 end

class Ticket < ApplicationRecord

    belongs_to :event,
        class_name: 'Event',
        foreign_key: :event_id,
        primary_key: :id
end
```

### User Authentication

Visitors to ArtWalk can log in, sign up, or use the demo user to explore the website fully

<img src="https://i.ibb.co/1dfVWGx/newlogin.png" alt="newlogin" border="0">
<img src="https://i.ibb.co/W3y06hb/newsignin.png" alt="newsignin" border="0">
