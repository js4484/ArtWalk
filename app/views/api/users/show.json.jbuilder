json.extract! @user, :id, :email
json.name "#{@user.first_name} #{@user.last_name}"