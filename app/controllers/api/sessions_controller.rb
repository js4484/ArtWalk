class Api::SessionsController < ApplicationController
  before_action :require_no_user!, only: %i(create new)

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
      render json: ["password and/or username incorrect/invalid"], status: 422
    else
      login_user!(@user)
      render '/api/users/show'
    end
  end

  def destroy
    @user = current_user
    if @user
      logout_user!
      render "/"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  def new
    render :new
  end
end
