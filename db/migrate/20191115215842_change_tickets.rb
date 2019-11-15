class ChangeTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :user_id, :integer, null: false
    add_column :tickets, :event_id, :integer, null: false
  end
end
