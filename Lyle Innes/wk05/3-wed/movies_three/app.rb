require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'
require 'httparty'
require_relative 'db_config'
require_relative 'models/movie'
require_relative 'movie_methods'


get '/' do
  erb :index 
end

get '/results' do
  title = params[:title] # ONLY PARAMS CAN BE CAPTURED AS A SYMBOL (IE: [:likethis] AS OPPOSED TO ['this'])
  @movies = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=#{ENV['OMDB_API_KEY']}").parsed_response['Search']
  erb :results
end

get '/about' do
  imdb_id = params[:imdb_id]

  @movie = get_movie_from_db(imdb_id) #this will return nil if there is no movie in the database

  if !@movie #the not of nil is true, so this will pass when there is no movie found in our database
    movie_info = request_omdb(imdb_id)
    @movie = Movie.create(
      title: movie_info['Title'],
      imdb_id: movie_info['imdb_id'],
      poster: movie_info['Poster']
      )
  end
  # binding.pry
  erb :about
end


