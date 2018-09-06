$(document).ready(function () {
  setInterval(function () {
    $("#welcome-small").fadeIn(1000).fadeOut(1000);
  }, 500);

  $("#begin").click(function () {
    $("#welcome").fadeOut("1500");
    $(this).fadeOut("1500");
    $("#questionaire").fadeIn("1500");
  });

  $("#answer-button").click(function () {
    $(this).animate({opacity: 0}, "slow");
    $("#atc").fadeIn(1500);
    setInterval(function() {
      $(this).fadeOut(1500);
      $("#qtc").fadeOut(1500);
      $("#atc").fadeOut(1500);
      $("#thank-you").fadeIn(1500);
    }, 5000)
  });
});
