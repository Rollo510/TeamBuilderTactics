class UnitsController < ApplicationController

    def index
        units = Unit.all
        render json: units
    end

    def create
        
    end
    
end
