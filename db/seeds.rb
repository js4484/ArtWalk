# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
Ticket.destroy_all

u1 = User.create(email: 'js@gmail.com', first_name: "jake", last_name: "s", photo: "placeholder_photo", billing: "u1_billing", city: "u1_city", state: "u1_state", zipcode: "u1_zipcode", country: "u1_country", shipping_city: "u1_shipping_city", shipping_state: "u1_shipping_state", shipping_zip: "u1_shipping_zip", shipping_country: "u1_shipping_country", email_pref_1: false, email_pref_2: false, email_pref_3: false, description: "u1_description", payment_methods: {amex: "XXXX"}, favorite_tags: {museum: "museum"}, linked_accts: {fb: "XXXX"}, password: "password")
demo = User.create(email: 'demo@user.com', first_name: "Demo", last_name: "User", password: "DemoUser")
org1 = User.create(email: 'bf@organizer.com', first_name: "Barnaby", last_name: "Fellington", password: "password", description: "Barnaby Fellington description")
org2 = User.create(email: 'el@organizer.com', first_name: "Elizabeth", last_name: "Lansing", password: "password", description: "Elizabeth Lansing description")
org3 = User.create(email: 'sb@organizer.com', first_name: "Shelly", last_name: "Dubois", password: "password", description: "Shelly Dubois description")
org4 = User.create(email: 'ms@organizer.com', first_name: "Mateo", last_name: "Smith", password: "password", description: "Mateo Smith description")
org5 = User.create(email: 'jd@organizer.com', first_name: "Julia", last_name: "Dibrenski", password: "password", description: "Julia Dibrensky description")
org6 = User.create(email: 'cb@organizer.com', first_name: "Claes", last_name: "Becker", password: "password", description: "Claes Becker description")


e2 = Event.create(
    event_title: "Conspicuous Corporate Consumption: Outragrous Lobby Art in NYC",
    location: "IBM Watson", 
    meet_up_details: "Meet by the giant spinning cube outside the Astor Place 6!",
    event_date: DateTime.strptime("09/16/2019 8:00", "%m/%d/%Y %H:%M"),
    start_time: 1000,
    end_time: 1400,
    event_image: "https://greenwichvillage.nyc/media/filer_public_thumbnails/filer_public/c2/bd/c2bdcaef-0e92-4b60-b4c2-edddd42f9cd8/51astorplace_koonsrabbit.jpg__550x275_q85_crop_subsampling-2_upscale.jpg",
    event_description: "Most blue chip contemporary works end up in private highrises, or shuttered in storage; thankfully our future corporate overlords want to show off enough to put some of this work in their lobbies. Let's take a look!",
    add_faqs: true,
    faqs: {"Wait, why should I go on this tour?": "To see increasingly lauded work that is increasingly out of reach of the public", "Is this satire, or serious?": "Yes!"},
    organizer_id: org5.id,
    social_link_q: false,
    social_links: {},
    event_type: "city tour",
    event_topic: "contemporary art",
    tags: {city: true, painting: true, sculpture: true, contemporary: true},
    ticket_num: 25,
    ticket_price: 15,
    ticket_country: "USA",
    ticket_currency: "USD",
    refund_policy: 3,
    private_event: false,
    show_remaining_tickets: false
   )


e1 = Event.create(
    event_title: "Ingres-ry women at the Met",
    location: "Metropolitan Museum of Art", 
    meet_up_details: "meet by the fountain directly north of the entrance steps",
    event_date: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
    start_time: 1000,
    end_time: 1330,
    event_image: "https://images.metmuseum.org/CRDImages/rl/original/DT717.jpg",
    event_description: "Discover the sumptuousness of Jean Auguste Dominique Ingres",
    add_faqs: true,
    faqs: {"how does one pronounce Ingres": "like ong, as in gong"},
    organizer_id: org1.id,
    social_link_q: false,
    social_links: {},
    event_type: "museum",
    event_topic: "painting",
    tags: {met: true, painting: true, french: true, museum: true},
    ticket_num: 30,
    ticket_price: 0,
    ticket_country: "USA",
    ticket_currency: "USD",
    refund_policy: 3,
    private_event: false,
    show_remaining_tickets: false
   )


    t1 = Ticket.create(event_id: e1.id, user_id: u1.id)

   e3 = Event.create(
    event_title: "Looking for God in Troubled Times",
    location: "Metropolitan Museum of Art", 
    meet_up_details: "meet by the fountain directly north of the entrance steps",
    event_date: DateTime.strptime("09/14/2019 8:00", "%m/%d/%Y %H:%M"),
    start_time: 1100,
    end_time: 1500,
    event_image: "https://images.metmuseum.org/CRDImages/ep/original/DT1480.jpg",
    event_description: "From baby Jesus, to miracle-making Jesus, to Jesus on the cross, HE SAVES. Join me as we examine the depiction of HIS grace, may it soothe you in these chaotic times",
    add_faqs: true,
    faqs: {"Why tho?": "Why not? Have some faith!", "Which is your favorite Jesus?": "Oh, baby Jesus for sure"},
    organizer_id: org2.id,
    social_link_q: false,
    social_links: {},
    event_type: "museum",
    event_topic: "painting",
    tags: {met: true, painting: true, museum: true, renaissance: true, Raphael: true},
    ticket_num: 30,
    ticket_price: 0,
    ticket_country: "USA",
    ticket_currency: "USD",
    refund_policy: 3,
    private_event: false,
    show_remaining_tickets: false
   )

   e4 = Event.create(
    event_title: "Lower East Side Studio Visits",
    location: "Lower East Side", 
    meet_up_details: "meet on the NW corner of Delancy and Eldridge",
    event_date: DateTime.strptime("11/26/2019 8:00", "%m/%d/%Y %H:%M"),
    start_time: 1100,
    end_time: 1500,
    event_image: "https://www.triplemint.com/blog/wp-content/uploads/2015/08/Lower-East-Side-NYC-Triplemint-Real-Estate-New-York-City.jpg",
    event_description: "Get ready for cramped spaces, tired feet, and making small talk with several introverts; we're visiting 5 working artists on the Lower East Side of Manhattan! Artists include: Monica Geller, Samurai Champloo, Ron Howard, Courtney Gesch, and Twyla Stierheirt. PLEASE NOTE: We are doing a lot of walking, wear comfortable shoes.",
    add_faqs: true,
    faqs: {"Do I pay the artists?": "Please buy their work if you like, but your ticket price goes to compensate artists for their time"},
    organizer_id: org3.id,
    social_link_q: false,
    social_links: {},
    event_type: "studio visit",
    event_topic: "contemporary",
    tags: {painting: true, sculpture: true, contemporary: true, city: true, walking: true, studio: true},
    ticket_num: 15,
    ticket_price: 250,
    ticket_country: "USA",
    ticket_currency: "USD",
    refund_policy: 3,
    private_event: false,
    show_remaining_tickets: false
   )

    e5 = Event.create(
        event_title: "Museum Cardio Climb",
        location: "Guggenheim Museum", 
        meet_up_details: "Meet across the street, along the Central Park wall",
        event_date: DateTime.strptime("08/26/2019 8:00", "%m/%d/%Y %H:%M"),
        start_time: 1100,
        end_time: 1200,
        event_image: "https://i0.wp.com/www.guggenheim.org/wp-content/uploads/2015/12/architecture-srgm-interior-low-angle-rotunda-16-9.jpg?w=870&zoom=2",
        event_description: "Have you ever looked at the spiral in the Guggenheim and thought 'oooooo suicide sprints!'? Lets get our heart pumping in one of the most unique buildings in the city. PLEASE NOTE: this is not a sanctioned event with the museum, excercises may include running from security!",
        add_faqs: true,
        faqs: {"Is this legal?": "It's certainly not ILlegal; admission price is included in your ArtTour ticket"},
        organizer_id: org4.id,
        social_link_q: false,
        social_links: {},
        event_type: "exercise",
        event_topic: "museum",
        tags: {painting: true, sculpture: true, contemporary: true, exercise: true, guggenheim: true},
        ticket_num: 20,
        ticket_price: 45,
        ticket_country: "USA",
        ticket_currency: "USD",
        refund_policy: 3,
        private_event: false,
        show_remaining_tickets: false
   )

    e6 = Event.create(
        event_title: "Remaking America: Building a New Art Canon",
        location: "The Museum of Modern Art", 
        meet_up_details: "meet in the outdoor sculpture garden",
        event_date: DateTime.strptime("10/14/2019 8:00", "%m/%d/%Y %H:%M"),
        start_time: 1100,
        end_time: 1400,
        event_image: "https://static.dezeen.com/uploads/2016/01/moma-expansion-diller-scofidio-renfro-new-york-usa_dezeen_1568_0.jpg",
        event_description: "Let's walk through the redesigned galleries at MoMA. Our focus will be on the new inclusions to the floor, and why certain artists and styles are now being highlighted",
        add_faqs: true,
        faqs: {"Who should I bring on this tour?": "Anyone who likes to walk and doesn't mind crowds"},
        organizer_id: org6.id,
        social_link_q: false,
        social_links: {},
        event_type: "museum",
        event_topic: "modern",
        tags: {painting: true, sculpture: true, modern: true, MoMA: true, walking: true, survey: true},
        ticket_num: 25,
        ticket_price: 50,
        ticket_country: "USA",
        ticket_currency: "USD",
        refund_policy: 3,
        private_event: false,
        show_remaining_tickets: false
   )