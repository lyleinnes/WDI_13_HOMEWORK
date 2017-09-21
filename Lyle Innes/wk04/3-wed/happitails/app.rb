require_relative 'animal'
require_relative 'client'
require 'pry'

shelter = {
  :clients => [Client.new('ben','33','0'), Client.new('steph','28','1'), Client.new('john','45','3')],
  :animals => [Animal.new('rex','2','male','dog'), Animal.new('fido','3','male','dog'), Animal.new('snoopy','4','male','dog'), Animal.new('tiger','6','female','cat')]
}

def transfer_animal animal_name client_name

  animal_obj = shelter[:animals].include?(animal.name)

end

binding.pry












