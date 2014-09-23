$( document ).ready(function() {
  console.log( "ready!" );
  $('#myModal').modal('show');


  $("#p1-bat_bike-image").click(function() {
    player1.character_class = "bat_bike";
    first_slot = document.querySelector(".active1");
    first_slot.removeAttribute("class");
    first_slot.setAttribute('class', player1.character_class + ' active1');
  });

  $("#p1-wheelie_bike-image").click(function() {
    player1.character_class = "wheelie_bike";
    first_slot2 = document.querySelector(".active1");
    first_slot2.removeAttribute("class");
    first_slot2.setAttribute('class', player1.character_class + ' active1');
  });

  $("#p2-bat_bike-image").click(function() {
    player2.character_class = "bat_bike";
    first_slot = document.querySelector(".active2");
    first_slot.removeAttribute("class");
    first_slot.setAttribute('class', player2.character_class + ' active2');
  });

  $("#p2-wheelie_bike-image").click(function() {
    player2.character_class = "wheelie_bike";
    first_slot2 = document.querySelector(".active2");
    first_slot2.removeAttribute("class");
    first_slot2.setAttribute('class', player2.character_class + ' active2');
  });

});
