require_relative 'animal'
require_relative 'client'
require 'pry'

# if i wana use a hash
# shelter = {
#   :clients => [Client.new('ben','33','0'), Client.new('steph','28','1'), Client.new('john','45','3')],
#   :animals => [Animal.new('rex','2','male','dog'), Animal.new('fido','3','male','dog'), Animal.new('snoopy','4','male','dog'), Animal.new('tiger','6','female','cat')]
# }

# if i wana use a 2d array
shelter = [[Client.new('ben','33','0'), Client.new('steph','28','1'), Client.new('john','45','3')], [Animal.new('rex','2','male','dog'), Animal.new('fido','3','male','dog'), Animal.new('snoopy','4','male','dog'), Animal.new('tiger','6','female','cat')]]

def adopt client_name, animal_name, shelter_arr
  anim_index = shelter_arr[1].find_index {|animal| animal.name == animal_name}
  anim_obj = shelter_arr[1][anim_index]
  shelter_arr[1].delete_at(anim_index)
  client_index = shelter_arr[0].find_index {|person| person.name == client_name}
  client_obj = shelter_arr[0][client_index]
  client_obj.adopt_animal(anim_obj)
end

def abandon client_name, animal_name, shelter_arr
  client_index = shelter_arr[0].find_index {|person| person.name == client_name}
  client_obj = shelter_arr[0][client_index]
  shelter_arr[1].push client_obj.get_rid_animal(animal_name)
end






binding.pry




