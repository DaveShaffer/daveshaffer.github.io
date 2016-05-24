class CreateDvds < ActiveRecord::Migration
  def change
    create_table :dvds do |t|
      t.string :format, null: false
      t.timestamps null: false
    end # End create_table do
  end # End def change
end # End Class CreateDvds
