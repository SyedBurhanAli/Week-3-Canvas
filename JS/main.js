function dolime() {
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor = "lime";

  // var canvas = dd1.getContext("2d");
  // canvas.fillStyle = "magenta";
  // canvas.fillRect(10, 10, 40, 40);
}

function doOrange() {
  //Get the canvas element with id="d2"
  var dd3 = document.getElementById("d2");
  //Set background color to orange
  dd3.style.backgroundColor = "orange";
}

function doPurple() {
  //Get the canvas element with id="d2" and the context
  var canvas = document.getElementById("d2");
  canvas.style.backgroundColor = "purple";
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  /*   canvas.style.backgroundColor = "purple";
   */
}

function doyellow() {
  // get the canvas element using the DOM
  var dd2 = document.getElementById("d2");
  dd2.style.backgroundColor = "white";

  // use getContext to use the canvas for drawing
  var ctx = dd2.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 10, 40, 40);
  ctx.fillRect(60, 10, 40, 40);

  ctx.fillStyle = "black"; //Text color
  ctx.font = "30px Arial"; //Text font
  ctx.fillText("Hello", 10, 80); //Writing Text
}

// function doyellow() {
//     var dd1 = document.getElementById("d1");
//     dd1.style.backgroundColor="white";
//     var ctx = dd1.getContext("2d");
//     ctx.fillStyle="yellow";
//     ctx.fillRect(10,10,40,40);
//     ctx.fillRect(60,10,40,40);

//     ctx.fillStyle = "black";
//     ctx.font = "30px Arial";
//     ctx.fillText("Hello",10,80);
//   }
