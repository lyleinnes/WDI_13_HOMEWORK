require 'yahoofinance'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/answer' do
  result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
  @volume = result['MSFT'].volume
  binding.pry
  erb :answer  
end