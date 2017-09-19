require 'pry'

#1
ninja_turtle = {
  name: 'Michelangelo',
  weapon: 'Nunchuks',
  radical: true
}

#2
ninja_turtle.merge!(age: 23)
#3
ninja_turtle.tap { |keyval| keyval.delete(:radical) }
#4
ninja_turtle.merge!(pizza_toppings: ['cheese', 'pepperoni', 'onion', 'chilli'])
#5
ninja_turtle[:pizza_toppings][0]
#6
ninja_turtle.keys
#7
ninja_turtle.each do |key, value|
  puts "#{key} is equal to #{value}"      # string interpolation here
end

binding.pry
