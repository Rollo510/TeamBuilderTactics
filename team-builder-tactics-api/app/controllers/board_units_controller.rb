class BoardUnitsController < ApplicationController

    def index
        board_units = BoardUnit.all
        render json: board_unit_index
    end

    def create 
        counter = 0
        board = Board.find_or_create_by(name: params[:name])
        params[:elements].each do |e|
            id = e.split('_')[1]
            unit = Unit.find_by(id: id)
            position = params[:hex][counter].to_i
            x = BoardUnit.create(board_id: board.id, unit_id: unit.id, hex: position)
            counter+= 1
        end
    end
    
end