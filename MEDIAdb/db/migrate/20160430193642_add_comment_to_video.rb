class AddCommentToVideo < ActiveRecord::Migration
  def change
    add_column :videos, :comment, :string
  end
end
