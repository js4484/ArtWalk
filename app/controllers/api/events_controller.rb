class Api::EventsController < ApplicationController
    
  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

end