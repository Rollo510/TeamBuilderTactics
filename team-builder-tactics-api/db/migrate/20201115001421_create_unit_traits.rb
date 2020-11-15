class CreateUnitTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :unit_traits do |t|
      t.references :trait, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
