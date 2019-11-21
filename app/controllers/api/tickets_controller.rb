class Api::TicketsController < ApplicationController
    def create
        @tickets = []
        params.qty.times do 
            @tickets << Ticket.new(eventId: params.eventId, userId: params.userId)
        end
        @tickets.each(&:save!)
        
    end
    
end