Rails.application.routes.draw do
  resources :pokemon_cards, only: [:index]
  resources :users, only: [:create, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
