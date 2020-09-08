class PokemonCardsController < ApplicationController
    def index 
        @cards = PokemonCard.all 

        render json: @cards
    end
end
