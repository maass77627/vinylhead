Rails.application.routes.draw do
  # resources :users
  resources :records

   resources :users, only: [:show] do
    resources :records, only: [:index]
   end


  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
