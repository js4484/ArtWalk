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

ActiveRecord::Schema.define(version: 2019_11_11_230956) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "photo"
    t.string "billing", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "country", null: false
    t.string "shipping_city"
    t.string "shipping_state"
    t.string "shipping_zip"
    t.string "shipping_country"
    t.boolean "email_pref_1", default: false, null: false
    t.boolean "email_pref_2", default: false, null: false
    t.boolean "email_pref_3", default: false, null: false
    t.text "description"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json "payment_methods", null: false
    t.json "favorite_tags"
    t.json "linked_accts", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
