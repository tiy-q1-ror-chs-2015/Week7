class CreateBackendStudents < ActiveRecord::Migration
  def change
    create_table :backend_students do |t|
      t.string :name
      t.string :wingspan
      t.text :photo
      t.string :gender
      t.text :bio

      t.timestamps null: false
    end
  end
end
