class Api::UsersController < ApplicationController
  before_action :require_no_user!


  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  
  def user_params
    params.require(:user).permit(:password, :email, :first_name, :last_name, :photo, :billing,
      :city, :state, :zipcode, :country, :shipping_city, :shipping_state, :shipping_zip, :shipping_country, :description,
      :email_pref_1, :email_pref_2, :email_pref_3)
  end
end