class ChangeUsersAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    add_column :users, :first_name, :string
    remove_column :users, :last_name
    add_column :users, :last_name, :string
    remove_column :users, :billing
    add_column :users, :billing, :string
    remove_column :users, :city
    add_column :users, :city, :string
    remove_column :users, :state
    add_column :users, :state, :string
    remove_column :users, :zipcode
    add_column :users, :zipcode, :string
    remove_column :users, :country
    add_column :users, :country, :string
    remove_column :users, :email_pref_1
    add_column :users, :email_pref_1, :boolean, default: false
    remove_column :users, :email_pref_2
    add_column :users, :email_pref_2, :boolean, default: false
    remove_column :users, :email_pref_3
    add_column :users, :email_pref_3, :boolean, default: false
    remove_column :users, :payment_methods
    add_column :users, :payment_methods, :json
    remove_column :users, :linked_accts
    add_column :users, :linked_accts, :json
  end
end
