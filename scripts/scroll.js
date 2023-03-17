$(function () {
    $(document).scroll(function () {
      var $nav = $(".main-footer");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".index-navigation");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });