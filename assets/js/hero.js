$(document).ready(function() {
  var i = 1;

  setInterval(function(){ 
    $("main").css("background", "url('../main/assets/images/hero" + i + ".jpg')");
    i < 2 ? i++ : i=0;
  }, 5000);
});
