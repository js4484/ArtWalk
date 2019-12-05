# ArtWalk

[Walk This Way! (Click Me)](https://art-walk.herokuapp.com/#/)

Welcome to ArtWalk, a single-page app that allows users to browse, and book tickets for, art tours around New York City. Based on Eventbrite, the website is largely available to any viewer, but one must be logged in to make any substantive changes.

![show-page](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/showpage.png)


The ticket interface acts as a layer of protection, only allowing users who are logged in to reserve tickets.
If tickets for an event are sold out, the button will change and become inoperable

![loginticketform](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/pleasesignin.png)
![ticketform](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/ticketform.png)
![congrats](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/purchasedtickets.png)
![soldout](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/soldout.png)


Visitors to ArtWalk can log in, sign up, or use the demo user to explore the website fully

![login](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/login.png)
![signup](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/signup.png)


# Technologies Used
1. Javascript
2. Ruby on Rails
3. PostgreSQL
4. HTML
5. SCSS/CSS

# Libraries Used
* React.js (incl. react-router-dom)
* Redux (incl. react-redux, redux-thunk middleware)
* Bcrypt for user authorization

# Features
* Sign up & log in with email & password
* Browse art tours
* Book tickets for art tours


# Future Features
* User Profile, where a user van view and remove tickets, as well as update their information
* Users can favorite/bookmark Events 
* Search Feature using tags; every event already has tags, saved as a true value for that tag in a hash

![tags](https://github.com/js4484/ArtWalk/blob/master/app/assets/images/tags.png)
