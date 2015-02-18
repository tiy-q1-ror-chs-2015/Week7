class StudentsController < ApplicationController
  def index
    # BackendStudent.limit(10)
    @students = BackendStudent.all
    if params[:limit]
      @students = @students.shuffle.slice(0, params[:limit].to_i)
    end
    respond_to do |format|
      format.json { render json: @students.to_json }
    end
  end

  def destroy
    @student = BackendStudent.find params[:id]
    @student.destroy
    respond_to do |format|
      format.json { render nothing: true }
    end
  end
end
