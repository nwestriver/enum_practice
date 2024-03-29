// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// 血液型の非同期通信処理
$(document).ready(function(){
  $('.js-blood_type').change(function() {
    const user_id = $(this).data('id');
    const blood_type = $(this).val();

    $.ajax( {
      type: 'PACTH',
      url: 'users/' + user_id + '/blood_type',
      date : {
        user: {
          id: user_id,
          blood_type: blood_type
        }
      },
      dataType: 'json',
    })
    .done(function(data) {
      alert(data.user_name + 'さんの血液型を' + data.blood_type + 'に更新しました。');
    })
  });
});