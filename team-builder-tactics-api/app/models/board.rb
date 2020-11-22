class Board < ApplicationRecord
    has_many :board_units, :dependent => :destroy
    has_many :units, through: :board_units
    default_scope { order(created_at: :desc)}
    validates :name, presence: true
end