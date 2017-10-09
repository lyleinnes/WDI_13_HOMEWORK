Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :dishes <-- this route adds all the possible routes for 'dish' views, including GET/POST/PATCH/PUT/DELETE. weeeowwwww!
  get '/', to: 'dishes#index'
  get '/dishes', to: 'dishes#index'
  get '/dishes/new', to: 'dishes#new'
  get '/dishes/:id', to: 'dishes#show'
  get '/dishes/:id/edit', to: 'dishes#edit'
  get '/dishes/:id/confirm_del', to: 'dishes#confirm_del'
  post '/dishes', to: 'dishes#create'
  put '/dishes/:id', to: 'dishes#update'
  delete '/dishes/:id', to: 'dishes#destroy'
end
