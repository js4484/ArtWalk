json.array! @tickets do |ticket|
    json.extract! ticket, :id, :event_id, :user_id
end


