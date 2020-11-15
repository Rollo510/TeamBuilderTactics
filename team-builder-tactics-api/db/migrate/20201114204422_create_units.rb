class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.string :name
      t.string :image
      t.integer :cost
      t.timestamps
    end
  end
end
