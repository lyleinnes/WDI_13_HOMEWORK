require 'pry'


#1
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

binding.pry
#2
planeteers[1]
#3
planeteers.push "Heart"   # planeteers << "Heart"
#4
planeteers = planeteers - ['Captain Planet']  # planeteers -= ['Captain Planet']
#5
heroes = planeteers + rangers
#6
heroes.sort
#7
heroes.shuffle
#8
heroes.sample
#9
def start_with(arr,letter)
  arr.select { |str| str.start_with?(letter) }
end
start_with(heroes, "B")
