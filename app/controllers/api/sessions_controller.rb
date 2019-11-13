class Api::SessionsController < ApplicationController
  before_action :require_no_user!, only: %i(create new)

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
      render json: ["password and/or email incorrect/invalid"], status: 422
    else
      login(@user)
      render '/api/users/show'
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  def new
    render :new
  end
end
