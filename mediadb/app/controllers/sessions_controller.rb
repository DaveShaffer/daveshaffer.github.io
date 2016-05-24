class SessionsController < ApplicationController

  def new
  end # End def new

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_back_or dvds_path
    else
    flash.now[:error] = 'Invalid email/password combination'
    render 'new'
    end # End if user
  end # End def create

  def destroy
    sign_out
    redirect_to root_url
  end # End def destroy
end # End Class SessionsController
