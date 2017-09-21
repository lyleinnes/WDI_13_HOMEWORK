class Animal

  def initialize name, age, gender, species
    # puts "what is this animals name?"
    # @name = gets.chomp
    # puts "how old is this animal?"
    # @age = gets.chomp.to_i
    # puts "is this animal male or female?"
    # @gender = gets.chomp
    # puts "what species is this animal?"
    # @species = gets.chomp
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def name
    @name
  end

  def toys
    puts @toys.join ", "
  end
  def give_toy toy
    @toys << toy
  end
  def take_toy toy
    @toys - [toy]
  end

end

