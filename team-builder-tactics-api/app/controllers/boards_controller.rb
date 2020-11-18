class BoardsController < ApplicationController

    def new
        board = Board.new
    end

    def create
        board = Board.find_or_create_by(name: params[:name])
        if board.save
            allBoards << board
            render json: board
        end
    end



    private

    def board_params
        params.require(:board).permit(:name)
    end

end
