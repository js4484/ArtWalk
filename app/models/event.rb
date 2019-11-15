class Event < ApplicationRecord

    belongs_to :organizer,
        class_name: 'User',
        foreign_key: :organizer_id,
        primary_key: :id
    

end