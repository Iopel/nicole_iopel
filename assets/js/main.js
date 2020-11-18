
/*$(document).ready(function () {

  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('header-navbar__btn--active');
  });

});*/
$(document).ready(function(){
	$('.header-navbar__btn').click(function(){
    $(this).toggleClass('header-navbar__btn--active');
    $('.header-navbar__list').fadeToggle(500)
	});
});