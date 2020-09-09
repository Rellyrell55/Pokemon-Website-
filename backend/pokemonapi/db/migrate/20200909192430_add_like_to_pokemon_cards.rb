class AddLikeToPokemonCards < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemon_cards, :like, :boolean
  end
end
