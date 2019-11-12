class Api::SessionsController < ApplicationController
  before_action :require_no_user!, only: %i(create new)

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render json: ["password and/or username does not exist"], status: 422
    else
      login_user!(@user)
      render '/api/users/show'
    end
  end

  def destroy
    logout_user!
    redirect_to new_session_url
  end

  def new
    render :new
  end
end
