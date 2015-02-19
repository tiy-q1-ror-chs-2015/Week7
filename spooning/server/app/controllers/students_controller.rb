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

  def create
    @student = BackendStudent.new student_params
    if @student.save
      respond_to do |format|
        format.json { render json: @student.to_json }
      end 
    else
      respond_to do |format|
        format.json { render json: @student.errors.full_messages, status: 422 }
      end
    end
  end

  def update
    @student = BackendStudent.find params[:id]
    # params[:name]
    # params[:bio]
    # params[:wingspan]
    if @student.update_attributes student_params
      respond_to do |format|
        format.json { render json: @student.to_json }
      end 
    else
      respond_to do |format|
        format.json { render json: @student.errors.full_messages, status: 422 }
      end
    end
  end

private
  def student_params
    params.require(:student).permit(
      :name,
      :bio,
      :wingspan,
      :photo

    )
  end
end
