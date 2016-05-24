class Dvd < ActiveRecord::Base
  belongs_to :user
  has_many :videos, dependent: :destroy
  validates :format, presence: true
end
