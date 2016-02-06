$(document).ready(function () {

  /*hamburger button*/
  $(".button-collapse").sideNav();

  /*hmm not sure*/
  $('.materialboxed').materialbox();

  /*enables dropdown on hover in navbar*/
  $(".dropdown-button").dropdown({
    hover: true
  });

  /*loads parallax plugin*/
  $('.parallax').parallax();

  /*on-click event handler for opening sayhello modal from hero image*/
  $('.btn-resume').on('click', function () {
    $('#modal1').openModal();
  });

  /*on-click event handler for submissions of sayhello modal*/
  $('.modal-close').on('click', function () {
    $('.sayhelloform')[0].reset();
  });


});