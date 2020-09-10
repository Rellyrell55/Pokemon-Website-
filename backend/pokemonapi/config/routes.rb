Rails.application.routes.draw do
  resources :pokemon_cards, only: [:index, :update]
  resources :users, only: [:create, :index, :show]
  post "login", to: "authentication#login"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
