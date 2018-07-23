
jQuery(function(){
  $("#accordion dt").on("click", function() {
      $(this).next().slideToggle();
      $(this).toggleClass("active");
  });
  $("#accordion dt").mouseover(function(){
    $(this).addClass("over");   
  });
  $("#accordion dt").mouseout(function(){
      $(this).removeClass("over");    
  });
});

// PC時のtel無効
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
        e.preventDefault();
    });
}

//PAGETOP へ戻る
jQuery(document).ready(function() {
var pagetop = $('.pagetop');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
          }
      });
      pagetop.click(function () {
          $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
  });
});

//slideのクロスフィード
