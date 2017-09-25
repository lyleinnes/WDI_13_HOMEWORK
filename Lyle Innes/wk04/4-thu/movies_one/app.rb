require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/about' do
  @movie = params[:title]
  oneResponse = HTTParty.get("http://omdbapi.com/?t=#{@movie}&apikey=#{ENV['OMDB_API_KEY']}")


  @title = oneResponse["Title"]
  @released = oneResponse["Released"]
  @director = oneResponse["Director"]
  @actors = oneResponse["Actors"]
  @runtime = oneResponse["Runtime"]
  @rated = oneResponse["Rated"]
  @poster = oneResponse["Poster"]
  @plot = oneResponse["Plot"]
  # binding.pry
  erb :about
end

get '/' do
  erb :index
end

get '/results' do
  @user_input = params['title_input']
  response = HTTParty.get("http://omdbapi.com/?s=#{@user_input}&apikey=#{ENV['OMDB_API_KEY']}")
  @movies = response.parsed_response["Search"]

  erb :results
end

