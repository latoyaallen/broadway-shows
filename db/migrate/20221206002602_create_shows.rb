class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.string :name
      t.boolean :is_on_broadway
      t.boolean :is_play
      t.string :venue

      t.timestamps
    end
  end
end
