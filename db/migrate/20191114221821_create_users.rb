class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :first_name
      t.string :last_name
      t.string :photo
      t.string "billing"
      t.string "city"
      t.string "state"
      t.string "zipcode"
      t.string "country"
      t.string "shipping_city"
      t.string "shipping_state"
      t.string "shipping_zip"
      t.string "shipping_country"
      t.json :payment_methods
      t.json :favorite_tags
      t.json :linked_accts
      t.boolean :email_pref_1, default: false
      t.boolean :email_pref_2, default: false
      t.boolean :email_pref_3, default: false
      t.text :description
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end