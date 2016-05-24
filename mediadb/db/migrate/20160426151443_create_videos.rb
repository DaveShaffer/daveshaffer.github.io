class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.timestamps null: false
    end # End create_table do
  end # End def change
end # End Class CreateVideos
