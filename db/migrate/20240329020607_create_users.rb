class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.integer :age, null: false
      t.integer :blood_type, null: false, default: 0
      t.boolean :is_married, null: false, default: false

      t.timestamps
    end
  end
end
