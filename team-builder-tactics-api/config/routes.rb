Rails.application.routes.draw do
  resources :boards
  resources :units, only: :index
  resources :traits
  resources :board_units
end
