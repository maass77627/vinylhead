class RecordsController < ApplicationController

    def index
        # records = Record.all
        # render json: records
        if params[:user_id]
            user = User.find_by!(id: params[:user_id])
           records = user.records
          else
          records = Record.all
          
         
          end
          render json: records, include: :user
    end

    def show
        record = Record.find_by(id: params[:id])
        render json: record
    end
end
