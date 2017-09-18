require 'pry'

puts "we're going to play the guessing game. first set the upper limit for the range of numbers we can guess from"

max = gets.chomp.to_i

myNumber = rand(0..max)

puts "now see if you can guess correctly"

answer = gets.chomp.to_i

if answer == myNumber
  puts "well done"
end

while answer != myNumber
  if answer < myNumber
    puts "wrong, guess higher"
    answer = gets.chomp.to_i
  else answer > myNumber
    puts "wrong, guess lower"
    answer = gets.chomp.to_i
  end
end

if answer == myNumber
  puts "well done"
end