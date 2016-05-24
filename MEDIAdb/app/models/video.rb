class Video < ActiveRecord::Base
  belongs_to :dvd
  validates :title, presence: true
end
