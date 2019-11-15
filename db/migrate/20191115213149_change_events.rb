class ChangeEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :organizer_id, :integer, null: false
  end
end
