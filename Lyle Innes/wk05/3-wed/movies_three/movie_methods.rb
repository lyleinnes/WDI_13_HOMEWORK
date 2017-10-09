
#this is the omdb request function
def request_omdb imdb_id
  HTTParty.get("http://omdbapi.com/?i=#{imdb_id}&apikey=#{ENV['OMDB_API_KEY']}").parsed_response
end

def get_movie_from_db imdb_id
  Movie.find_by(imdbid: imdb_id) #must use a symbol here and the symbol represents the column in the movies table (which is a talbe model)
end

