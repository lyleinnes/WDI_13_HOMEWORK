
class Monkey

  def initialize name, species
    @name = name
    @species = species
    @foods_eaten = []
  end
  
  def change_name new_name
    @name = new_name
  end

  # def name
  #   @name
  # end
  
  def change_species new_species
    @species = new_species
  end

  # def species
  #   @species
  # end

  def eat food
    @foods_eaten.push food
  end

  def poo
    @foods_eaten = []
    puts "phewww"
  end

  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@foods_eaten.join(' & ')} for lunch"
  end

end