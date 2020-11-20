class BoardsController < ApplicationController

    def index
        boards = Board.all
        render json: boards, except: [:description, :created_at, :updated_at]
    end

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

    def show
        board = Board.find_by(id: params[:id])
        render json: board.to_json(:include => {
            :board_units => {:except => [:created_at, :updated_at] }
        }, :except => [:description, :created_at, :updated_at])
    end



    private

    def board_params
        params.require(:board).permit(:name)
    end

end
