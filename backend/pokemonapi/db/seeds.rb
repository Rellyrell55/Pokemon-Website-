PokemonCard.destroy_all


require 'pry'
require 'rest-client'
require 'json'
require 'pokemon_tcg_sdk'


cards = Pokemon::Card.where(set: 'base', supertype: 'pokemon')


cards.map do |card|
    @singleCard = PokemonCard.create(
        name: card.name, 
        pokedexNumber: card.national_pokedex_number,
        imageURLHiRes: card.image_url_hi_res,
        rarity: card.rarity,
        types: card.types
    )
end

# @singleCard.sort do |dexHigh, dexLow|
#     binding.pry 
# end








# base_url = "https://pokemontcg.io/full_cards?setCode=base1"
# data = RestClient.get(base_url)
# parsed_data = JSON.parse(data)

# parsed_data.map do |full_card|
#     Pokemonfull_card.create(name: full_card["name"], pokedexNumber: full_card["nationalPokedexNumber"], imageURLHiRes: full_card["imageUrlHiRes"], rarity: full_card["rarity"])
# end

