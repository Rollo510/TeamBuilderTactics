class UnitsController < ApplicationController

    def index
        units = Unit.all
        render json: units
    end

    def create
        
    end
    
    def destroy
        unit = Unit.find_by(id: params[:id])
    end
    
end
