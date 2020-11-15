class Unit < ApplicationRecord
    has_many :unit_traits
    has_many :traits, through: :unit_traits
end
