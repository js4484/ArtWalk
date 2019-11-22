Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:show, :index] do
      resources :tickets, only: [:create]
    end
  end
  # root "static_pages#root"
end


# changes for github