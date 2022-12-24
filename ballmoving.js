var velocity = 5;
var positionX = 0;
var reverse = false;
var ball = document.getElementById('ball');
var ball2 =document.getElementById('ball2');
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1280;
 
  if(reverse){
    positionX = positionX - velocity;
    ball.style.left = positionX + 'px';
    ball2.style.right = positionX + 'px';
  }
  else{
    positionX = positionX + velocity;
    ball.style.left = positionX + 'px';
    ball2.style.top = positionX + 'px';
    
  }
  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
 
}
  
//ball.style.top = positionX + 'px';
//ball.style.left = positionY + 'px';



// This call the moveBall function every 100ms
setInterval(moveBall, 10);
