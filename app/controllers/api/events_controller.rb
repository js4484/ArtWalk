class Api::EventsController < ApplicationController
    
  def index
    @events.show
    render "api/events/index"
  end
    
  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

end