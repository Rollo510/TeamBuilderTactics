class BoardUnitsController < ApplicationController

    def index
        board_units = BoardUnit.all
        render json: board_units
    end

end
