# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ title: 'Star Wars' }, { title: 'Lord of the Rings' }])
#   Character.create(title: 'Luke', movie: movies.first)
User.create!(username: "joni77627", password_digest: "12345")
Record.create!(title: 'blue album', description: 'beatles record', user_id: 1, image: "weezer.jpg")
Record.create!(title: 'Kid A', description: 'rock and roll', user_id: 1, image: "kida.jpg")
Record.create!(title: 'neutral milk hotel', description: '1st album', user_id: 1, image: "neutralmilkhotel.jpg")
Record.create!(title: 'seargent pepper', description: 'good sound', user_id: 1, image: "sgtpepper.jpg") 
