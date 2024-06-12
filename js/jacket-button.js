window.addEventListener('load', function () {
  var $button = document.querySelector('.jacket');
  var $menu = document.querySelector('.review');
  $button.addEventListener('click', function () {
      if ($menu.classList.contains('show')) {
          $menu.classList.remove('show');
      }
      else {
          $menu.classList.add('show');
      }
  });
});
