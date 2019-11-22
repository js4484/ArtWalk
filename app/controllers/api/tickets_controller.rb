class Api::TicketsController < ApplicationController
    def create

        @tickets = []

        params[:qty].to_i.times do 
            @tickets << Ticket.new(event_id: params[:event_id], user_id: params[:userId])
        end
        @tickets.each(&:save!)
        render json: ["Congratulations, your tickets have been purchased"]
    end
    
end