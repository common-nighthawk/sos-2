$(document).ready(function() {
  var i = 1;
  var p = [ ["Endure", "Gracefully", "Mining Emergencies"],
            ["Stay", "Afloat", "Marine Emergencies"],
            ["Pull", "Through", "Terror Emergencies"] ]

  setInterval(function(){
    // $("main").css("background", "url('../main/assets/images/hero" + i + ".jpg')");
    $("main").css("background", "url('../sos-2/assets/images/hero" + i + ".jpg')");
    $("main span.one")[0].innerHTML = p[i][0];
    $("main span.two")[0].innerHTML = p[i][1];
    $("main span.three")[0].innerHTML = p[i][2];
    i < 2 ? i++ : i=0;
  }, 7500);
});
