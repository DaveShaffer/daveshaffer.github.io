class DvdsController < ApplicationController
  # Login Security
  before_action :signed_in_user
  before_action :set_dvd, only: [:show, :edit, :update, :destroy]
  before_action :verify_correct_user, only: [:show, :edit, :update, :destroy]

  # GET /dvds
  # GET /dvds.json
  def index
    @dvds = current_user.dvds.order(id: :asc)
  end #End def index

  # GET /dvds/1
  # GET /dvds/1.json
  def show
  end #End def show

  # GET /dvds/new
  def new
    @dvd = Dvd.new
  end # End def new

  # GET /dvds/1/edit
  def edit
  end # End def edit

  # POST /dvds
  # POST /dvds.json
  def create
    @dvd = Dvd.new(dvd_params)
    @dvd.user = current_user

    respond_to do |format|
      if @dvd.save
        format.html { redirect_to dvds_path, notice: 'Medium was successfully created.' }
        format.json { render :show, status: :created, location: @dvd }
      else
        format.html { render :new }
        format.json { render json: @dvd.errors, status: :unprocessable_entity }
      end # End if @dvd.save
    end # End respond_to do
  end # End def create

  # PATCH/PUT /dvds/1
  # PATCH/PUT /dvds/1.json
  def update
    respond_to do |format|
      if @dvd.update(dvd_params)
        format.html { redirect_to dvds_path, notice: 'Medium was successfully updated.' }
        format.json { render :show, status: :ok, location: @dvd }
      else
        format.html { render :edit }
        format.json { render json: @dvd.errors, status: :unprocessable_entity }
      end # End if @dvd.update
    end # End respond_to do
  end # End def update

  # DELETE /dvds/1
  # DELETE /dvds/1.json
  def destroy
    @dvd.destroy
    respond_to do |format|
      format.html { redirect_to dvds_path, notice: 'Medium was successfully destroyed.' }
      format.json { head :no_content }
    end # End respond_to do
  end # End def destroy

  private
     def verify_correct_user
       @dvd = current_user.dvds.find_by(id: params[:id])
       redirect_to root_url, notice: 'Access Denied!' if @dvd.nil?
     end # End def verify_correct_user

    # Use callbacks to share common setup or constraints between actions.
    def set_dvd
      @dvd = Dvd.find(params[:id])
    end # End set_dvd

    # Never trust parameters from the scary internet, only allow the white list through.
    def dvd_params
      params.require(:dvd).permit(:format)
    end # End def dvd_params
end # End Class DvdsController
