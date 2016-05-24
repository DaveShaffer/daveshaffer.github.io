# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require_relative './video_data.rb'
require_relative './dvd_data.rb'
require_relative './user_data.rb'

Video.destroy_all
DVD.destroy_all
User.destroy_all

video_data = get_video_data()
dvd_data = get_dvd_data()
user_data = get_user_data()

video_data.each_pair do |dvd_format, videos|
  info = dvd_data[dvd_format]
  current_dvd = Dvd.create!({
    format:    info[:format],
    user_id:   info[dvd_id]
    })

  videos.each do |video|
    Video.create!({
      title:      video[:title],
      dvd_id:     video[:dvd_id]
      })
  end # End videos.each do
end # End video_data.each do
