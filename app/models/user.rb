class User < ApplicationRecord
  enum blood_type: {A: 0, B: 1, O: 2, AB: 3}
  enum is_married: {single: false, married: true}
end
