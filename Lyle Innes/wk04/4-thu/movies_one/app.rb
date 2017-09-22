require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


get '/about' do
  @movie = params['movie']

  response = HTTParty.get("http://omdbapi.com/?t=#{@movie}&apikey=#{ENV['OMDB_API_KEY']}")


  @title = response["Title"]
  @released = response["Released"]
  @director = response["Director"]
  @actors = response["Actors"]
  @runtime = response["Runtime"]
  @rated = response["Rated"]
  @poster = response["Poster"]
  @plot = response["Plot"]
  # binding.pry
  erb :about
end


get '/' do
  erb :index
end
