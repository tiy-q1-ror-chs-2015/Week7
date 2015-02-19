class BackendStudent < ActiveRecord::Base
  validates :name, presence: true
  # Rails Sexy Validations
end
