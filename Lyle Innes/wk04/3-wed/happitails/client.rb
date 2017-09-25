class Client

  def initialize name, age, num_of_children
    @name = name
    @age = age
    @children = num_of_children
    @pets = []
  end

  def name
    @name
  end

  def pets
    @pets
  end
  def adopt_animal animal
    @pets.push animal
  end
  def get_rid_animal pet_name
    pet_index = pets.find_index {|pet| pet.name == pet_name}
    pet_obj = pets[pet_index]
    pets.delete_at(pet_index)
  end

end