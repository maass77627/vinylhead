class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :title
      t.string :image
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
