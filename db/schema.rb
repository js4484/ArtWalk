# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_15_213149) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "event_title", null: false
    t.string "location", null: false
    t.text "meet_up_details", null: false
    t.date "event_date", null: false
    t.integer "start_time", null: false
    t.integer "end_time", null: false
    t.string "event_image", null: false
    t.text "event_description", null: false
    t.boolean "add_faqs", default: false, null: false
    t.json "faqs"
    t.boolean "social_link_q", default: false, null: false
    t.json "social_links"
    t.string "event_type", null: false
    t.string "event_topic", null: false
    t.json "tags"
    t.integer "ticket_num"
    t.integer "ticket_price"
    t.string "ticket_country"
    t.string "ticket_currency"
    t.integer "refund_policy"
    t.boolean "private_event", default: false, null: false
    t.boolean "show_remaining_tickets", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "organizer_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "photo"
    t.string "billing"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "country"
    t.string "shipping_city"
    t.string "shipping_state"
    t.string "shipping_zip"
    t.string "shipping_country"
    t.json "payment_methods"
    t.json "favorite_tags"
    t.json "linked_accts"
    t.boolean "email_pref_1", default: false
    t.boolean "email_pref_2", default: false
    t.boolean "email_pref_3", default: false
    t.text "description"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
