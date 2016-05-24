json.array!(@dvds) do |dvd|
  json.extract! dvd, :id, :format
  json.url dvd_url(dvd, format: :json)
end
