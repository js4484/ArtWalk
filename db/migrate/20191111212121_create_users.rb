class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: true, unique: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :photo
      t.string "billing", null: false
      t.string "city", null: false
      t.string "state", null: false
      t.string "zipcode", null: false
      t.string "country", null: false
      t.string "shipping_city"
      t.string "shipping_state"
      t.string "shipping_zip"
      t.string "shipping_country"
      t.boolean :email_pref_1, null: false, default: false
      t.boolean :email_pref_2, null: false, default: false
      t.boolean :email_pref_3, null: false, default: false
      t.text :description
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end
