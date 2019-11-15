class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :event_title, null: false
      t.string :location, null: false
      t.text :meet_up_details, null: false
      t.date :event_date, null: false
      t.integer :start_time, null: false
      t.integer :end_time, null: false
      t.string :event_image, null: false
      t.text :event_description, null: false
      t.boolean :add_faqs, null: false, default: false
      t.json :faqs
      t.boolean :social_link_q, null: false, default: false
      t.json :social_links
      t.string :event_type, null: false
      t.string :event_topic, null: false
      t.json :tags
      t.integer :ticket_num
      t.integer :ticket_price
      t.string :ticket_country
      t.string :ticket_currency
      t.integer :refund_policy
      t.boolean :private_event, null: false, default: false
      t.boolean :show_remaining_tickets, null: false, default: false

      t.timestamps
    end
    
  end
end
