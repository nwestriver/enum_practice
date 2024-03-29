Rails.application.routes.draw do
  resources :users do 
    resource :blood_type, only: %i[update], controller: 'users/blood_type'
  end

  root "users#index"
end