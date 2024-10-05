class RecordSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :user_id
end
