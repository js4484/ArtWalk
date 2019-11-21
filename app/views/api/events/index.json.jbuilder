json.array! @events do |event|
    json.extract! event, :id, :event_title, :location, :event_date, :start_time, :event_image
end