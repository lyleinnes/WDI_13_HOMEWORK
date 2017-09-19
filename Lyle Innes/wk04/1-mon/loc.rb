require 'pry'
require 'fileutils'

puts 'Enter filename:'

filename = gets.chomp

line_count = `wc -l "#{filename}"`.strip.split(' ')[0] #the backticks allow us to 
                                        #use bash prompts inside ruby
puts line_count + " line(s)"