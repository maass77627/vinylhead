class RecordsController < ApplicationController

# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        if params[:user_id]
            user = User.find_by!(id: params[:user_id])
           records = user.records
          else
          records = Record.all
          end
          render json: records, include: :user
    end

    # def create
    #     byebug
    #     # record = Record.create!(record_params)
    #     # byebug
    #     # render json: record, status: :created

    #     user_id = session[:user_id]
    #     # user = User.find(user_id)
    #     record = Record.create(record_params)
    #     # user.records << record
    #     record.user_id = user.id
        
    #     # byebug
    #     render json: record, status: :created
        
    # end

    def create
      record = Record.create(record_params)
      render json: record, status: :created

    end

    def show
        record = Record.find_by(id: params[:id])
        render json: record
    end

    def destroy
        record = Record.find_by(id: params[:id])
        if record
          record.destroy
          head :no_content
        else
          render json: { error: "Record not found" }, status: :not_found
        end
      end 

    private
    def record_params
    params.permit(:title, :image, :description, :user_id)
    end

    # def render_unprocessable_entity_response(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    #  end
end
