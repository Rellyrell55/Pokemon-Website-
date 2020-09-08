class CreatePokemonCards < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_cards do |t|
      t.string :name
      t.integer :pokedexNumber
      t.text :imageURLHiRes
      t.string :rarity
      t.text :types

      t.timestamps
    end
  end
end
