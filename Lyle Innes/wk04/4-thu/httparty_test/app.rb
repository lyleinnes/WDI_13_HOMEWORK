require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

results = HTTParty.get ('http://api.fixer.io/latest')

binding.pry