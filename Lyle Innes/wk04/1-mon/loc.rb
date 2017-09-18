require 'pry'
require 'fileutils'

puts 'Enter filename:'

filename = gets.chomp

line_count = `wc -l "#{filename}"`.strip.split(' ')[0].to_i

puts line_count.to_s + " line(s)"