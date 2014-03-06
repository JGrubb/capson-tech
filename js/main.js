$('#trigger').on('click', function(e) {
  $('#main-nav').toggleClass('active');
  e.preventDefault();
});

$('#main-nav').on('click touchstart', 'li a', function() {
  $('#main-nav').toggleClass('active');
});

smoothScroll.init();
