class AuthenticationController < ApplicationController
    def login
        @user = User.find_by username: params[:username]
        if !@user 
            render json: { error: "No user with that username" }, status: :unauthorized
        else 
            if !@user.authenticate params[:password]
                render json: { error: "Password was incorect" }, status: :unauthorized
            else
                # render json: { message: "you have been logged in" }, status: :created 
                redirect_to "http://localhost:3001/user.html?id=#{@user.id}"
            end
        end
    end
end
