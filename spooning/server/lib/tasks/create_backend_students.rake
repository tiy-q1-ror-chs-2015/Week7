# namespace :spooning do
task create_backend_students: :environment do
  puts "HEllo"
  100.times do
    BackendStudent.create!({
      name: "#{Faker::Name.first_name} #{Faker::Name.last_name}",
      wingspan: "#{rand(1..10)}ft",
      photo: [
          "http://placekitten.com/100/100",
          "http://fillmurray.com/100/100",
          "http://placecage.com/100/100",
          "http://stevensegallery.com/100/100"
        ].sample,
      gender: ["Male", "Female"].sample,
      bio: Faker::Lorem.paragraph(10)
    })
  end
end
# end
