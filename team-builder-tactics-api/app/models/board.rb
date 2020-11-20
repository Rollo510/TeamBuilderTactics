class Board < ApplicationRecord
    has_many :board_units
    has_many :units, through: :board_units
    default_scope { order(created_at: :desc)}
end