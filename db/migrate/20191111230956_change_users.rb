class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :payment_methods, :json, null: false
    add_column :users, :favorite_tags, :json
    add_column :users, :linked_accts, :json, null: false
    add_index :users, :email, unique: true
  end
end