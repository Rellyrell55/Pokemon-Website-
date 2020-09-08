class UsersController < ApplicationController
    def index 
        @user = User.all 
        render json: @user
    end
    
    def create 
        @user = User.create(
            username: params[:username],
            email: params[:email],
            password: params[:password]
        )
        render json: { user: @user}, status: :created
    end
end
