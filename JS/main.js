function dolime() {
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor = "lime";

  // var canvas = dd1.getContext("2d");
  // canvas.fillStyle = "magenta";
  // canvas.fillRect(10, 10, 40, 40);
}

function doOrange() {
  var dd3 = document.getElementById("d2");
  dd3.style.backgroundColor = "orange";
}

function doPurple() {
  var canvas = document.getElementById("d2");

  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = "purple";
}

function doyellow() {
  var dd2 = document.getElementById("d2");
  dd2.style.backgroundColor = "white";

  //Using Canvas Context
  var ctx = dd2.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 10, 40, 40);
  ctx.fillRect(60, 10, 40, 40);

  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText("Hello", 10, 80);
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
