class CreateBoardUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :board_units do |t|
      t.references :unit, null: false, foreign_key: true
      t.references :board, null: false, foreign_key: true
      t.integer :hex

      t.timestamps
    end
  end
end
