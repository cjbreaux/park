$(document).ready(function() {

  var meters = parseFloat(prompt("What is your height in Meters?"));


  if (meters >= 1.8) {
    $(".big").show();
    $(".medium").show();
    $(".small").show();

  }

  if (meters < 1.8 && meters >= 1.2) {
    $(".medium").show();
    $(".small").show();

  }

  if (meters <1.2) {
    $(".small").show();

  }













});
