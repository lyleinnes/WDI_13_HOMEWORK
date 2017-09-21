class Client

  def initialize name, age, num_of_children
    @name = name
    @age = age
    @children = num_of_children
    @pets = []
  end

  def pets
    @pets
  end
  def adopt_animal animal
    @pets.push animal
  end
  def get_rid_animal animal
    @pets - [animal]
  end

end