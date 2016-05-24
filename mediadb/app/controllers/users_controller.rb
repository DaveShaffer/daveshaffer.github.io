class UsersController < ApplicationController
  # Login Security
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :signed_in_user, only: [:index, :show, :edit, :update, :destroy]
  before_action :verify_correct_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.order(id: :asc)
  end # End def indes

  # GET /users/1
  # GET /users/1.json
  def show
  end # End def show

  # GET /users/new
  def new
    @user = User.new
  end # End def new

  # GET /users/1/edit
  def edit
  end # End def edit

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        sign_in @user
        format.html { redirect_to root_path, notice: 'Welcome!' }

        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end # End if @user.save
    end # End respond_to do
  end # End def create

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end # End if @user.update
    end # End respond_to do
  end # End def update

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end # End respond_to do
  end # End def destroy

  private
     def verify_correct_user
       user = User.find_by(id: params[:id])
       redirect_to root_url, notice: 'Access Denied!' unless current_user?(user)
     end # End def verify_correct_user

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end # End def set_user

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :address, :age, :dob, :photo_url)
    end # End def user_params
end # End Class UsersController
