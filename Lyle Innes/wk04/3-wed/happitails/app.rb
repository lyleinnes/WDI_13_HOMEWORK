require_relative 'animal'
require_relative 'client'
require 'pry'

shelter = {
  :clients => [Client.new('ben','33','0'), Client.new('steph','28','1'), Client.new('john','45','3')],
  :animals => [Animal.new('rex','2','male','dog'), Animal.new('fido','3','male','dog'), Animal.new('snoopy','4','male','dog'), Animal.new('tiger','6','female','cat')]
}

shelter[:animals].each do |animal|
  puts animal.name
end

shelter[:animals].each do |animal|
  if animal.name? == "rex"
  end
end



  # animal_obj = shelter[:animals].include?(animal.name)
  # puts animal_obj

binding.pry




