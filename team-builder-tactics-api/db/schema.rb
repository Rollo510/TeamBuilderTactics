# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_15_001421) do

  create_table "board_units", force: :cascade do |t|
    t.integer "unit_id", null: false
    t.integer "board_id", null: false
    t.integer "hex"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["board_id"], name: "index_board_units_on_board_id"
    t.index ["unit_id"], name: "index_board_units_on_unit_id"
  end

  create_table "boards", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "traits", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "unit_traits", force: :cascade do |t|
    t.integer "trait_id", null: false
    t.integer "unit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trait_id"], name: "index_unit_traits_on_trait_id"
    t.index ["unit_id"], name: "index_unit_traits_on_unit_id"
  end

  create_table "units", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "board_units", "boards"
  add_foreign_key "board_units", "units"
  add_foreign_key "unit_traits", "traits"
  add_foreign_key "unit_traits", "units"
end
