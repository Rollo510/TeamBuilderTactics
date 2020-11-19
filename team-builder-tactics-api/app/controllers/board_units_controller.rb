class BoardUnitsController < ApplicationController

    def index
        board_units = BoardUnit.all
        render json: board_units
    end

    def create 
        board = Board.find_or_create_by(name: params[:name])
        board_units = params[:elements].map.with_index do |e, counter|
            id = e.split('_')[1]
            unit = Unit.find_by(id: id)
            position = params[:hex][counter].to_i
            BoardUnit.create(unit_id: unit.id, board_id: board.id, hex: position)
        end
        render json: board_units, except: [:created_at, :updated_at]
    end
    
end