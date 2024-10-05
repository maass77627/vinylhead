class User < ApplicationRecord
    has_many :records
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
