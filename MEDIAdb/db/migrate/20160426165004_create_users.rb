class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :remember_token
      t.timestamps null: false
    end # End create_table do
    add_index :users, :email, unique: true
  end # End def change
end # End Class CreateUsers
