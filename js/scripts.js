$(document).ready(function() {

  var meters = parseFloat(prompt("What is your height in Meters?"));


  if (meters >= 1.8) {
    $(".big").show();
    $(".medium").show();
    $(".small").show();
    $("img").addClass("border");

  }

  if (meters < 1.8 && meters >= 1.2) {
    $(".medium").show();
    $(".small").show();
    $(".medium img").addClass("border");
    $(".small img").addClass("border");

  }

  if (meters <1.2) {
    $(".small").show();
    $(".small img").addClass("border");


  }













});
