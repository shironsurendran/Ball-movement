//Set global variable that would contain the position, velocity and the html element "ball"
var position=0;
var velocity=5;
var ball=document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  position=position+velocity;
  ball.style.left = position + 'px';
  }
//ball.style.top = positionX + 'px';
//ball.style.left = positionY + 'px';



// This call the moveBall function every 100ms
setInterval(moveBall, 100);
