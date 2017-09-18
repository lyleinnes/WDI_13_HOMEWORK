require 'pry'
require 'fileutils'

# --- q1 ---
# days_of_the_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

# --- q2 ---
# puts days_of_the_week.rotate
# last = days_of_the_week.pop(1)
# days_of_the_week.push.unshift(last)
# puts days_of_the_week

# --- q3 ---
new_daysotw = [['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], ['saturday', 'sunday']]

# --- q4 ---
sliced = new_daysotw.slice(0,1)
# puts slice

# --- q5 ---
# -- not sure why the sort method isnt returning an alphabetized array in this case....
sliced.sort

puts sliced