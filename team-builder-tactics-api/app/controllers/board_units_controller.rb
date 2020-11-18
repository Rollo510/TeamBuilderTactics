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
            // params[:hex][counter].to_i
            x = BoardUnit.create(board_id: board.id, unit_id: unit.id, hex: params[:hex][counter] //may need to split)
            counter++
        end
        binding.pry
        render json: board_units
    end



    private

    # def board_unit_params
    #     params.require(:board_units).permit(:name, :elements)
    # end

end
