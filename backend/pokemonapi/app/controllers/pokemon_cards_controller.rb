class PokemonCardsController < ApplicationController
    def index 
        if params[:search]
            @cards = PokemonCard.where('name LIKE ?', "%#{params[:search]}%")
        else
            @cards = PokemonCard.all 
        end

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
