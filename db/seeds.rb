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
    organizer_id: u1.id,
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