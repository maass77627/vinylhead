class UsersController < ApplicationController


    before_action :authorize
    skip_before_action :authorize, only: [:create, :index]
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        users = User.all
        render json: users
     end

    def create
        user = User.create(user_params)
        if user.valid?
             session[:user_id] = user.id
            render json: user, status: :created
         else
             render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
     end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: :records
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

   
        def authorize
            return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
        end
end
