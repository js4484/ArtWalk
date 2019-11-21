require 'bcrypt'
class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true
  validates :password_digest, presence: true
  validates :session_token, presence: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :tickets
  has_many :attending_events,
    through: :tickets,
    source: :event

  has_many :organized_events,
      class_name: 'Event',
      foreign_key: :organizer_id,
      primary_key: :id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
