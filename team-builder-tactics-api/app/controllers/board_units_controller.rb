class BoardUnitsController < ApplicationController

    def index
        board_units = BoardUnit.all
        render json: board_units
    end

    def create
        board_unit = BoardUnit.create(board_unit_params)
        board = Board.find(board_unit_params[:board_id])
        render json: board
    end



    private

    def board_unit_params
        params.require(:board_unit).permit(:unit_id, :board_it, :hex)
    end

end
