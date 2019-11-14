# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(email: 'js@gmail.com', first_name: "jake", last_name: "s", photo: "placeholder_photo", billing: "u1_billing", city: "u1_city", state: "u1_state", zipcode: "u1_zipcode", country: "u1_country", shipping_city: "u1_shipping_city", shipping_state: "u1_shipping_state", shipping_zip: "u1_shipping_zip", shipping_country: "u1_shipping_country", email_pref_1: false, email_pref_2: false, email_pref_3: false, description: "u1_description", payment_methods: {amex: "XXXX"}, favorite_tags: {museum: "museum"}, linked_accts: {fb: "XXXX"}, password: "password")
demo = u1 = User.create(email: 'demo@user.com', first_name: "Demo", last_name: "User", password: "DemoUser")