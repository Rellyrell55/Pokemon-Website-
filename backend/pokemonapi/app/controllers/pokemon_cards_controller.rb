class PokemonCardsController < ApplicationController
    def index 
        @cards = PokemonCard.all 

        render json: @cards
    end

    def update 
        @card = PokemonCard.find(params[:id])
        @card.update(
            like: params[:like]
        )
        render json: @card 
    end
end
