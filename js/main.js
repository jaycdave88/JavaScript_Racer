
function Player(){
   this.character_class = "";
}

var player1 = new Player();
var player2 = new Player();


function movePlayer1(){
 var first_car = document.querySelector(".active1");
 remove = first_car.removeAttribute("class");
 var nextElement = first_car.nextElementSibling;
 nextElement.setAttribute('class', player1.character_class + ' active1');
 console.log(nextElement);
 console.log(player1.character_class);
 nextElement.className += " " + player1.character_class;
 if ( nextElement.getAttribute('id') === "end"){
      alert("Player 1 you win!")
  } else{
  nextElement.setAttribute('class', player1.character_class + ' active1');
}

}//end of function

function movePlayer2(){
  var second_car = document.querySelector(".active2");
  remove = second_car.removeAttribute("class");
  var nextElement = second_car.nextElementSibling;
  console.log(player2);
  console.log("this is the character_class " + player2.character_class);
  nextElement.setAttribute('class', player2.character_class + ' active2');
  console.log(nextElement)
  console.log(player2);
  console.log(player2.character_class);
  nextElement.className += " " + player2.character_class;
  if ( nextElement.getAttribute('id') === "end"){
      alert("Player 2 you win!")
  } else{
  nextElement.setAttribute('class', player2.character_class + ' active2');
}

} //end of function

window.onkeyup = function(keyboardEventObj) {
    var key = keyboardEventObj.keyCode ? keyboardEventObj.keyCode : keyboardEventObj.which;
    console.log(keyboardEventObj);

    if (key == 65) {
        movePlayer1();
    }else if (key == 76) {
        movePlayer2();
    }
}


