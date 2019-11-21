class Event < ApplicationRecord

    belongs_to :organizer,
        class_name: 'User',
        foreign_key: :organizer_id,
        primary_key: :id
    
    has_many :tickets

    has_many :attendees,
        through: :tickets,
        source: :user


    def tickets_sold
        self.tickets.count
    end

    def tourguide
        self.organizer
    end

end