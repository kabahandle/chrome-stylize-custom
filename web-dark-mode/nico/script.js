'use strict';

! function(){

  // Cボタンでコメントトグル
  var button = document.getElementsByClassName('CommentOnOffButton')[0];
  document.addEventListener('keydown', functin(e){
    if( e.keyCode == 67 ) { button.click(); }
  });

}();
