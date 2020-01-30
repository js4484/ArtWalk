json.extract! @user, :id, :email, :tickets, :attending_events, :organized_events
json.name "#{@user.first_name} #{@user.last_name}"
