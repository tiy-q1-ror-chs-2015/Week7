class AddressesController < ApplicationController
  def index
    @addresses = Address.all
    respond_to do |format|
      format.js
      format.html
    end
  end

  def new
    @address = Address.new
    respond_to do |format|
      format.js
    end    
  end

  def create
    @address = Address.create address_params
    @addresses = Address.all
    respond_to do |format|
      format.js
    end
  end

  def destroy
    @address = Address.find params[:id]
    @address.destroy
    respond_to do |format|
      format.js { render nothing: true }
    end
  end


private
  def address_params
    # {address: { name: "asdf"}}
    params.require(:address).permit(
      :name,
      :city,
      :address,
      :state,
      :zip
    )
  end  
end
